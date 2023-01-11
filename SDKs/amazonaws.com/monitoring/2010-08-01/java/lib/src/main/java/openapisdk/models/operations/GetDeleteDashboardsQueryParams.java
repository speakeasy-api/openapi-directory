package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeleteDashboardsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDeleteDashboardsActionEnum action;
    public GetDeleteDashboardsQueryParams withAction(GetDeleteDashboardsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DashboardNames")
    public String[] dashboardNames;
    public GetDeleteDashboardsQueryParams withDashboardNames(String[] dashboardNames) {
        this.dashboardNames = dashboardNames;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDeleteDashboardsVersionEnum version;
    public GetDeleteDashboardsQueryParams withVersion(GetDeleteDashboardsVersionEnum version) {
        this.version = version;
        return this;
    }
}