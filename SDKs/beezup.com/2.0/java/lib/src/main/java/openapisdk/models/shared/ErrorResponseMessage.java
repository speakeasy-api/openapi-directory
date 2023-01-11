package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ErrorResponseMessage {
    @JsonProperty("errors")
    public UserErrorMessage[] errors;
    public ErrorResponseMessage withErrors(UserErrorMessage[] errors) {
        this.errors = errors;
        return this;
    }
}