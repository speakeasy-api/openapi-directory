package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * NotificationAttributes
 * Attributes for the notification including the path, recipients, and share data. 
**/
public class NotificationAttributes {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("action")
    public NotificationAttributesActionEnum action;
    public NotificationAttributes withAction(NotificationAttributesActionEnum action) {
        this.action = action;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("created")
    public OffsetDateTime created;
    public NotificationAttributes withCreated(OffsetDateTime created) {
        this.created = created;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public NotificationAttributes withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("modified")
    public OffsetDateTime modified;
    public NotificationAttributes withModified(OffsetDateTime modified) {
        this.modified = modified;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public NotificationAttributes withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("path")
    public String path;
    public NotificationAttributes withPath(String path) {
        this.path = path;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("readableDescription")
    public String readableDescription;
    public NotificationAttributes withReadableDescription(String readableDescription) {
        this.readableDescription = readableDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("readableDescriptionWithoutPath")
    public String readableDescriptionWithoutPath;
    public NotificationAttributes withReadableDescriptionWithoutPath(String readableDescriptionWithoutPath) {
        this.readableDescriptionWithoutPath = readableDescriptionWithoutPath;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recipients")
    public NotificationRecipient[] recipients;
    public NotificationAttributes withRecipients(NotificationRecipient[] recipients) {
        this.recipients = recipients;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sendEmail")
    public Boolean sendEmail;
    public NotificationAttributes withSendEmail(Boolean sendEmail) {
        this.sendEmail = sendEmail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shareId")
    public String shareId;
    public NotificationAttributes withShareId(String shareId) {
        this.shareId = shareId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public NotificationAttributesTypeEnum type;
    public NotificationAttributes withType(NotificationAttributesTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userId")
    public String userId;
    public NotificationAttributes withUserId(String userId) {
        this.userId = userId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("usernames")
    public String[] usernames;
    public NotificationAttributes withUsernames(String[] usernames) {
        this.usernames = usernames;
        return this;
    }
}