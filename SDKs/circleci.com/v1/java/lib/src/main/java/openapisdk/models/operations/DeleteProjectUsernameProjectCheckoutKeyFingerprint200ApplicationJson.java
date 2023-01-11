package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeleteProjectUsernameProjectCheckoutKeyFingerprint200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public DeleteProjectUsernameProjectCheckoutKeyFingerprint200ApplicationJsonMessageEnum message;
    public DeleteProjectUsernameProjectCheckoutKeyFingerprint200ApplicationJson withMessage(DeleteProjectUsernameProjectCheckoutKeyFingerprint200ApplicationJsonMessageEnum message) {
        this.message = message;
        return this;
    }
}