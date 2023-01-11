package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Error {
    @JsonProperty("code")
    public Long code;
    public Error withCode(Long code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("details")
    public java.util.Map<String, Object> details;
    public Error withDetails(java.util.Map<String, Object> details) {
        this.details = details;
        return this;
    }
    @JsonProperty("href")
    public String href;
    public Error withHref(String href) {
        this.href = href;
        return this;
    }
    @JsonProperty("message")
    public String message;
    public Error withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonProperty("statusCode")
    public Long statusCode;
    public Error withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}