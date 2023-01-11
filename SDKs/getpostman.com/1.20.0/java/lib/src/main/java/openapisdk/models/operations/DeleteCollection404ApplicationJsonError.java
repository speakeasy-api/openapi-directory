package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeleteCollection404ApplicationJsonError {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("details")
    public DeleteCollection404ApplicationJsonErrorDetails details;
    public DeleteCollection404ApplicationJsonError withDetails(DeleteCollection404ApplicationJsonErrorDetails details) {
        this.details = details;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public DeleteCollection404ApplicationJsonError withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public DeleteCollection404ApplicationJsonError withName(String name) {
        this.name = name;
        return this;
    }
}