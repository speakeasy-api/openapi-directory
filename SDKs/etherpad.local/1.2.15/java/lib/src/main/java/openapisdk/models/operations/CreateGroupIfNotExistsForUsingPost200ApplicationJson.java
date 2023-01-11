package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateGroupIfNotExistsForUsingPost200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public Long code;
    public CreateGroupIfNotExistsForUsingPost200ApplicationJson withCode(Long code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public CreateGroupIfNotExistsForUsingPost200ApplicationJsonData data;
    public CreateGroupIfNotExistsForUsingPost200ApplicationJson withData(CreateGroupIfNotExistsForUsingPost200ApplicationJsonData data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public CreateGroupIfNotExistsForUsingPost200ApplicationJson withMessage(String message) {
        this.message = message;
        return this;
    }
}