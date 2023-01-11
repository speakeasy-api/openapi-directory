package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TemplateCreateMessageBody
 * Provides information about a request to create a message template.
**/
public class TemplateCreateMessageBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Arn")
    public String arn;
    public TemplateCreateMessageBody withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Message")
    public String message;
    public TemplateCreateMessageBody withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RequestID")
    public String requestID;
    public TemplateCreateMessageBody withRequestId(String requestID) {
        this.requestID = requestID;
        return this;
    }
}