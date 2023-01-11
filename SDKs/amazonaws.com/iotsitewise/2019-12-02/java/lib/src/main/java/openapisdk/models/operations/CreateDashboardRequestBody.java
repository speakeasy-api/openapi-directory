package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateDashboardRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientToken")
    public String clientToken;
    public CreateDashboardRequestBody withClientToken(String clientToken) {
        this.clientToken = clientToken;
        return this;
    }
    @JsonProperty("dashboardDefinition")
    public String dashboardDefinition;
    public CreateDashboardRequestBody withDashboardDefinition(String dashboardDefinition) {
        this.dashboardDefinition = dashboardDefinition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dashboardDescription")
    public String dashboardDescription;
    public CreateDashboardRequestBody withDashboardDescription(String dashboardDescription) {
        this.dashboardDescription = dashboardDescription;
        return this;
    }
    @JsonProperty("dashboardName")
    public String dashboardName;
    public CreateDashboardRequestBody withDashboardName(String dashboardName) {
        this.dashboardName = dashboardName;
        return this;
    }
    @JsonProperty("projectId")
    public String projectId;
    public CreateDashboardRequestBody withProjectId(String projectId) {
        this.projectId = projectId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public java.util.Map<String, String> tags;
    public CreateDashboardRequestBody withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
}