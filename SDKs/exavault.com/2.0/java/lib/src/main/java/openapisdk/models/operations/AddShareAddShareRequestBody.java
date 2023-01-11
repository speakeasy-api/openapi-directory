package openapisdk.models.operations;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class AddShareAddShareRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accessMode")
    public openapisdk.models.shared.AccessMode accessMode;
    public AddShareAddShareRequestBody withAccessMode(openapisdk.models.shared.AccessMode accessMode) {
        this.accessMode = accessMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("embed")
    public Boolean embed;
    public AddShareAddShareRequestBody withEmbed(Boolean embed) {
        this.embed = embed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("expiration")
    public OffsetDateTime expiration;
    public AddShareAddShareRequestBody withExpiration(OffsetDateTime expiration) {
        this.expiration = expiration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fileDropCreateFolders")
    public Boolean fileDropCreateFolders;
    public AddShareAddShareRequestBody withFileDropCreateFolders(Boolean fileDropCreateFolders) {
        this.fileDropCreateFolders = fileDropCreateFolders;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hasNotification")
    public Boolean hasNotification;
    public AddShareAddShareRequestBody withHasNotification(Boolean hasNotification) {
        this.hasNotification = hasNotification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isPublic")
    public Boolean isPublic;
    public AddShareAddShareRequestBody withIsPublic(Boolean isPublic) {
        this.isPublic = isPublic;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("messageBody")
    public String messageBody;
    public AddShareAddShareRequestBody withMessageBody(String messageBody) {
        this.messageBody = messageBody;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("messageSubject")
    public String messageSubject;
    public AddShareAddShareRequestBody withMessageSubject(String messageSubject) {
        this.messageSubject = messageSubject;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public AddShareAddShareRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notificationEmails")
    public String[] notificationEmails;
    public AddShareAddShareRequestBody withNotificationEmails(String[] notificationEmails) {
        this.notificationEmails = notificationEmails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("password")
    public String password;
    public AddShareAddShareRequestBody withPassword(String password) {
        this.password = password;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recipients")
    public AddShareAddShareRequestBodyRecipients[] recipients;
    public AddShareAddShareRequestBody withRecipients(AddShareAddShareRequestBodyRecipients[] recipients) {
        this.recipients = recipients;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requireEmail")
    public Boolean requireEmail;
    public AddShareAddShareRequestBody withRequireEmail(Boolean requireEmail) {
        this.requireEmail = requireEmail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resources")
    public String[] resources;
    public AddShareAddShareRequestBody withResources(String[] resources) {
        this.resources = resources;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sendingLocalFiles")
    public Boolean sendingLocalFiles;
    public AddShareAddShareRequestBody withSendingLocalFiles(Boolean sendingLocalFiles) {
        this.sendingLocalFiles = sendingLocalFiles;
        return this;
    }
    @JsonProperty("type")
    public AddShareAddShareRequestBodyTypeEnum type;
    public AddShareAddShareRequestBody withType(AddShareAddShareRequestBodyTypeEnum type) {
        this.type = type;
        return this;
    }
}