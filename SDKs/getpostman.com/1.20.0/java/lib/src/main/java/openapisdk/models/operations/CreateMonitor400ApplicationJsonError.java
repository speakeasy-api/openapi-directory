package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateMonitor400ApplicationJsonError {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("details")
    public CreateMonitor400ApplicationJsonErrorDetails details;
    public CreateMonitor400ApplicationJsonError withDetails(CreateMonitor400ApplicationJsonErrorDetails details) {
        this.details = details;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public CreateMonitor400ApplicationJsonError withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public CreateMonitor400ApplicationJsonError withName(String name) {
        this.name = name;
        return this;
    }
}