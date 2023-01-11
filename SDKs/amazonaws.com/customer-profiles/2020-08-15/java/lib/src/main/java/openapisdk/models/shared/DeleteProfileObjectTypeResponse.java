package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteProfileObjectTypeResponse {
    @JsonProperty("Message")
    public String message;
    public DeleteProfileObjectTypeResponse withMessage(String message) {
        this.message = message;
        return this;
    }
}