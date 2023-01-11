package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ResponseItem {
    @JsonProperty("data")
    public java.util.Map<String, Object> data;
    public ResponseItem withData(java.util.Map<String, Object> data) {
        this.data = data;
        return this;
    }
    @JsonProperty("message")
    public String message;
    public ResponseItem withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonProperty("result")
    public Long result;
    public ResponseItem withResult(Long result) {
        this.result = result;
        return this;
    }
}