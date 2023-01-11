package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CopyPadWithoutHistoryUsingGet200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public Long code;
    public CopyPadWithoutHistoryUsingGet200ApplicationJson withCode(Long code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public java.util.Map<String, Object> data;
    public CopyPadWithoutHistoryUsingGet200ApplicationJson withData(java.util.Map<String, Object> data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public CopyPadWithoutHistoryUsingGet200ApplicationJson withMessage(String message) {
        this.message = message;
        return this;
    }
}