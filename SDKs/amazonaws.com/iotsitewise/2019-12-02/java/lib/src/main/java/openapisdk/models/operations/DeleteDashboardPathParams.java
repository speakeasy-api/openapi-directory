package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteDashboardPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=dashboardId")
    public String dashboardId;
    public DeleteDashboardPathParams withDashboardId(String dashboardId) {
        this.dashboardId = dashboardId;
        return this;
    }
}