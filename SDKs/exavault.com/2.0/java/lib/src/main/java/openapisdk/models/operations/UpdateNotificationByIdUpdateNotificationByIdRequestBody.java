package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateNotificationByIdUpdateNotificationByIdRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("action")
    public UpdateNotificationByIdUpdateNotificationByIdRequestBodyActionEnum action;
    public UpdateNotificationByIdUpdateNotificationByIdRequestBody withAction(UpdateNotificationByIdUpdateNotificationByIdRequestBodyActionEnum action) {
        this.action = action;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public UpdateNotificationByIdUpdateNotificationByIdRequestBody withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recipients")
    public String[] recipients;
    public UpdateNotificationByIdUpdateNotificationByIdRequestBody withRecipients(String[] recipients) {
        this.recipients = recipients;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sendEmail")
    public Boolean sendEmail;
    public UpdateNotificationByIdUpdateNotificationByIdRequestBody withSendEmail(Boolean sendEmail) {
        this.sendEmail = sendEmail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("usernames")
    public String[] usernames;
    public UpdateNotificationByIdUpdateNotificationByIdRequestBody withUsernames(String[] usernames) {
        this.usernames = usernames;
        return this;
    }
}