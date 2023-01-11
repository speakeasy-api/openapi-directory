package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateDashboardRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientToken")
    public String clientToken;
    public UpdateDashboardRequestBody withClientToken(String clientToken) {
        this.clientToken = clientToken;
        return this;
    }
    @JsonProperty("dashboardDefinition")
    public String dashboardDefinition;
    public UpdateDashboardRequestBody withDashboardDefinition(String dashboardDefinition) {
        this.dashboardDefinition = dashboardDefinition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dashboardDescription")
    public String dashboardDescription;
    public UpdateDashboardRequestBody withDashboardDescription(String dashboardDescription) {
        this.dashboardDescription = dashboardDescription;
        return this;
    }
    @JsonProperty("dashboardName")
    public String dashboardName;
    public UpdateDashboardRequestBody withDashboardName(String dashboardName) {
        this.dashboardName = dashboardName;
        return this;
    }
}