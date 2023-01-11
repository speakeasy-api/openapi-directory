package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateEnvironment400ApplicationJsonError {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public CreateEnvironment400ApplicationJsonError withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public CreateEnvironment400ApplicationJsonError withName(String name) {
        this.name = name;
        return this;
    }
}