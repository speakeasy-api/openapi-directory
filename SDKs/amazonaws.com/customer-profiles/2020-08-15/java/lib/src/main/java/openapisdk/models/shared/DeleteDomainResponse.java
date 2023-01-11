package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteDomainResponse {
    @JsonProperty("Message")
    public String message;
    public DeleteDomainResponse withMessage(String message) {
        this.message = message;
        return this;
    }
}