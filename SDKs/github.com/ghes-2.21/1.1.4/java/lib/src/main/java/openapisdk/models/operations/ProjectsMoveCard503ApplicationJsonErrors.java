package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ProjectsMoveCard503ApplicationJsonErrors {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public String code;
    public ProjectsMoveCard503ApplicationJsonErrors withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public ProjectsMoveCard503ApplicationJsonErrors withMessage(String message) {
        this.message = message;
        return this;
    }
}