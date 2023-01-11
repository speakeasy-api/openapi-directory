package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostTokens201ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public PostTokens201ApplicationJson withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ok")
    public Boolean ok;
    public PostTokens201ApplicationJson withOk(Boolean ok) {
        this.ok = ok;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("result")
    public Object[] result;
    public PostTokens201ApplicationJson withResult(Object[] result) {
        this.result = result;
        return this;
    }
}