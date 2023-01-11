package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateDashboardPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=dashboardId")
    public String dashboardId;
    public UpdateDashboardPathParams withDashboardId(String dashboardId) {
        this.dashboardId = dashboardId;
        return this;
    }
}