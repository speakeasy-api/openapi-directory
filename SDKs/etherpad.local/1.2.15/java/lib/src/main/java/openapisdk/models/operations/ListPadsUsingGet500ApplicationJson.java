package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListPadsUsingGet500ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public Long code;
    public ListPadsUsingGet500ApplicationJson withCode(Long code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public java.util.Map<String, Object> data;
    public ListPadsUsingGet500ApplicationJson withData(java.util.Map<String, Object> data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public ListPadsUsingGet500ApplicationJson withMessage(String message) {
        this.message = message;
        return this;
    }
}