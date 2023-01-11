package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteWebhookInput {
    @JsonProperty("projectName")
    public String projectName;
    public DeleteWebhookInput withProjectName(String projectName) {
        this.projectName = projectName;
        return this;
    }
}