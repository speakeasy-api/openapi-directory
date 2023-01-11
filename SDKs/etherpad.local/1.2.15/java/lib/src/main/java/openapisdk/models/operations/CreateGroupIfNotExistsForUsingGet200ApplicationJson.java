package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateGroupIfNotExistsForUsingGet200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public Long code;
    public CreateGroupIfNotExistsForUsingGet200ApplicationJson withCode(Long code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public CreateGroupIfNotExistsForUsingGet200ApplicationJsonData data;
    public CreateGroupIfNotExistsForUsingGet200ApplicationJson withData(CreateGroupIfNotExistsForUsingGet200ApplicationJsonData data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public CreateGroupIfNotExistsForUsingGet200ApplicationJson withMessage(String message) {
        this.message = message;
        return this;
    }
}