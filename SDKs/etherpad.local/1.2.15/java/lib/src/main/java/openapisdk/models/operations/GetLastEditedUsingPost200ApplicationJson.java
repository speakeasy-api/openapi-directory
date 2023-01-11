package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetLastEditedUsingPost200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public Long code;
    public GetLastEditedUsingPost200ApplicationJson withCode(Long code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public GetLastEditedUsingPost200ApplicationJsonData data;
    public GetLastEditedUsingPost200ApplicationJson withData(GetLastEditedUsingPost200ApplicationJsonData data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public GetLastEditedUsingPost200ApplicationJson withMessage(String message) {
        this.message = message;
        return this;
    }
}