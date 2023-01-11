package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ErrorError {
    @JsonProperty("code")
    public String code;
    public ErrorError withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public ErrorError withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("message")
    public String message;
    public ErrorError withMessage(String message) {
        this.message = message;
        return this;
    }
}