package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ExceptionDetail {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("helpLink")
    public String helpLink;
    public ExceptionDetail withHelpLink(String helpLink) {
        this.helpLink = helpLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public ExceptionDetail withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stackTrace")
    public String stackTrace;
    public ExceptionDetail withStackTrace(String stackTrace) {
        this.stackTrace = stackTrace;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public ExceptionDetail withType(String type) {
        this.type = type;
        return this;
    }
}