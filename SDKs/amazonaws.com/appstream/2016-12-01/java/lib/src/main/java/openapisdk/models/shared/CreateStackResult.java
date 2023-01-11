package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateStackResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Stack")
    public Stack stack;
    public CreateStackResult withStack(Stack stack) {
        this.stack = stack;
        return this;
    }
}