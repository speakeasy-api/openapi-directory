package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateAuthorIfNotExistsForUsingGet200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public Long code;
    public CreateAuthorIfNotExistsForUsingGet200ApplicationJson withCode(Long code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public CreateAuthorIfNotExistsForUsingGet200ApplicationJsonData data;
    public CreateAuthorIfNotExistsForUsingGet200ApplicationJson withData(CreateAuthorIfNotExistsForUsingGet200ApplicationJsonData data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public CreateAuthorIfNotExistsForUsingGet200ApplicationJson withMessage(String message) {
        this.message = message;
        return this;
    }
}