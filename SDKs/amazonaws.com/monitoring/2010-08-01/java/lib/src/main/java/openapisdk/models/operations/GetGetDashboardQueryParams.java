package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGetDashboardQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetGetDashboardActionEnum action;
    public GetGetDashboardQueryParams withAction(GetGetDashboardActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DashboardName")
    public String dashboardName;
    public GetGetDashboardQueryParams withDashboardName(String dashboardName) {
        this.dashboardName = dashboardName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetGetDashboardVersionEnum version;
    public GetGetDashboardQueryParams withVersion(GetGetDashboardVersionEnum version) {
        this.version = version;
        return this;
    }
}