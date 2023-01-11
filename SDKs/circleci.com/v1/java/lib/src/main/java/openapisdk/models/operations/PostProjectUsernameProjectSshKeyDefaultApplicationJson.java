package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostProjectUsernameProjectSshKeyDefaultApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public PostProjectUsernameProjectSshKeyDefaultApplicationJson withMessage(String message) {
        this.message = message;
        return this;
    }
}