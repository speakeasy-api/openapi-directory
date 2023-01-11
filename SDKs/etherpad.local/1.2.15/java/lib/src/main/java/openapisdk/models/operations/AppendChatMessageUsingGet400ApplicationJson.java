package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AppendChatMessageUsingGet400ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public Long code;
    public AppendChatMessageUsingGet400ApplicationJson withCode(Long code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public java.util.Map<String, Object> data;
    public AppendChatMessageUsingGet400ApplicationJson withData(java.util.Map<String, Object> data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public AppendChatMessageUsingGet400ApplicationJson withMessage(String message) {
        this.message = message;
        return this;
    }
}