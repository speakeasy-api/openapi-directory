package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AddNotificationAddNotificationRequestBody {
    @JsonProperty("action")
    public AddNotificationAddNotificationRequestBodyActionEnum action;
    public AddNotificationAddNotificationRequestBody withAction(AddNotificationAddNotificationRequestBodyActionEnum action) {
        this.action = action;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public AddNotificationAddNotificationRequestBody withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recipients")
    public String[] recipients;
    public AddNotificationAddNotificationRequestBody withRecipients(String[] recipients) {
        this.recipients = recipients;
        return this;
    }
    @JsonProperty("resource")
    public String resource;
    public AddNotificationAddNotificationRequestBody withResource(String resource) {
        this.resource = resource;
        return this;
    }
    @JsonProperty("sendEmail")
    public Boolean sendEmail;
    public AddNotificationAddNotificationRequestBody withSendEmail(Boolean sendEmail) {
        this.sendEmail = sendEmail;
        return this;
    }
    @JsonProperty("type")
    public AddNotificationAddNotificationRequestBodyTypeEnum type;
    public AddNotificationAddNotificationRequestBody withType(AddNotificationAddNotificationRequestBodyTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonProperty("usernames")
    public String[] usernames;
    public AddNotificationAddNotificationRequestBody withUsernames(String[] usernames) {
        this.usernames = usernames;
        return this;
    }
}