package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateAuthorUsingPost200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public Long code;
    public CreateAuthorUsingPost200ApplicationJson withCode(Long code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public CreateAuthorUsingPost200ApplicationJsonData data;
    public CreateAuthorUsingPost200ApplicationJson withData(CreateAuthorUsingPost200ApplicationJsonData data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public CreateAuthorUsingPost200ApplicationJson withMessage(String message) {
        this.message = message;
        return this;
    }
}