package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeleteProjectUsernameProjectEnvvarName200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public DeleteProjectUsernameProjectEnvvarName200ApplicationJsonMessageEnum message;
    public DeleteProjectUsernameProjectEnvvarName200ApplicationJson withMessage(DeleteProjectUsernameProjectEnvvarName200ApplicationJsonMessageEnum message) {
        this.message = message;
        return this;
    }
}