package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteApplicationsRequest {
    @JsonProperty("configurationIds")
    public String[] configurationIds;
    public DeleteApplicationsRequest withConfigurationIds(String[] configurationIds) {
        this.configurationIds = configurationIds;
        return this;
    }
}