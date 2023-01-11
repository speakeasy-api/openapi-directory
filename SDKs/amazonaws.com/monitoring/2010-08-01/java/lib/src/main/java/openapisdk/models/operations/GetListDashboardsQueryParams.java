package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetListDashboardsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetListDashboardsActionEnum action;
    public GetListDashboardsQueryParams withAction(GetListDashboardsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DashboardNamePrefix")
    public String dashboardNamePrefix;
    public GetListDashboardsQueryParams withDashboardNamePrefix(String dashboardNamePrefix) {
        this.dashboardNamePrefix = dashboardNamePrefix;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public GetListDashboardsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetListDashboardsVersionEnum version;
    public GetListDashboardsQueryParams withVersion(GetListDashboardsVersionEnum version) {
        this.version = version;
        return this;
    }
}