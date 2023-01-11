package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetSessionInfoUsingGet200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public Long code;
    public GetSessionInfoUsingGet200ApplicationJson withCode(Long code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public GetSessionInfoUsingGet200ApplicationJsonData data;
    public GetSessionInfoUsingGet200ApplicationJson withData(GetSessionInfoUsingGet200ApplicationJsonData data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public GetSessionInfoUsingGet200ApplicationJson withMessage(String message) {
        this.message = message;
        return this;
    }
}