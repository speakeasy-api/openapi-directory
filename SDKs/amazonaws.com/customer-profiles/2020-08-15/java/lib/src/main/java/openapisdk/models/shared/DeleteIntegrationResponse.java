package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteIntegrationResponse {
    @JsonProperty("Message")
    public String message;
    public DeleteIntegrationResponse withMessage(String message) {
        this.message = message;
        return this;
    }
}