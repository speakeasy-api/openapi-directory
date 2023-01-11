package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetLastEditedUsingGet200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public Long code;
    public GetLastEditedUsingGet200ApplicationJson withCode(Long code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public GetLastEditedUsingGet200ApplicationJsonData data;
    public GetLastEditedUsingGet200ApplicationJson withData(GetLastEditedUsingGet200ApplicationJsonData data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public GetLastEditedUsingGet200ApplicationJson withMessage(String message) {
        this.message = message;
        return this;
    }
}