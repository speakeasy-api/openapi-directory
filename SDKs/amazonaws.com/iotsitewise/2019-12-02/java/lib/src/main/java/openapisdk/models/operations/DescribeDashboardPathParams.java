package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeDashboardPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=dashboardId")
    public String dashboardId;
    public DescribeDashboardPathParams withDashboardId(String dashboardId) {
        this.dashboardId = dashboardId;
        return this;
    }
}