package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteWebhookInput {
    @JsonProperty("name")
    public String name;
    public DeleteWebhookInput withName(String name) {
        this.name = name;
        return this;
    }
}