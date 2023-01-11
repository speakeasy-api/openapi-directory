package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateDashboardResponse {
    @JsonProperty("dashboardArn")
    public String dashboardArn;
    public CreateDashboardResponse withDashboardArn(String dashboardArn) {
        this.dashboardArn = dashboardArn;
        return this;
    }
    @JsonProperty("dashboardId")
    public String dashboardId;
    public CreateDashboardResponse withDashboardId(String dashboardId) {
        this.dashboardId = dashboardId;
        return this;
    }
}