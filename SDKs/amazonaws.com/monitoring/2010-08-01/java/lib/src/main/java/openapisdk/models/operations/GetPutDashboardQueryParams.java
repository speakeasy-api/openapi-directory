package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPutDashboardQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetPutDashboardActionEnum action;
    public GetPutDashboardQueryParams withAction(GetPutDashboardActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DashboardBody")
    public String dashboardBody;
    public GetPutDashboardQueryParams withDashboardBody(String dashboardBody) {
        this.dashboardBody = dashboardBody;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DashboardName")
    public String dashboardName;
    public GetPutDashboardQueryParams withDashboardName(String dashboardName) {
        this.dashboardName = dashboardName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetPutDashboardVersionEnum version;
    public GetPutDashboardQueryParams withVersion(GetPutDashboardVersionEnum version) {
        this.version = version;
        return this;
    }
}