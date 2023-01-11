package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateStackResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Stack")
    public Stack stack;
    public UpdateStackResult withStack(Stack stack) {
        this.stack = stack;
        return this;
    }
}