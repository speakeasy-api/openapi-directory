package openapisdk.models.operations;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class UpdateShareByIdUpdateShareRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accessMode")
    public openapisdk.models.shared.AccessMode accessMode;
    public UpdateShareByIdUpdateShareRequestBody withAccessMode(openapisdk.models.shared.AccessMode accessMode) {
        this.accessMode = accessMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("embed")
    public Boolean embed;
    public UpdateShareByIdUpdateShareRequestBody withEmbed(Boolean embed) {
        this.embed = embed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("expiration")
    public OffsetDateTime expiration;
    public UpdateShareByIdUpdateShareRequestBody withExpiration(OffsetDateTime expiration) {
        this.expiration = expiration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fileDropCreateFolders")
    public Boolean fileDropCreateFolders;
    public UpdateShareByIdUpdateShareRequestBody withFileDropCreateFolders(Boolean fileDropCreateFolders) {
        this.fileDropCreateFolders = fileDropCreateFolders;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hasNotification")
    public Boolean hasNotification;
    public UpdateShareByIdUpdateShareRequestBody withHasNotification(Boolean hasNotification) {
        this.hasNotification = hasNotification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isPublic")
    public Boolean isPublic;
    public UpdateShareByIdUpdateShareRequestBody withIsPublic(Boolean isPublic) {
        this.isPublic = isPublic;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("messageBody")
    public String messageBody;
    public UpdateShareByIdUpdateShareRequestBody withMessageBody(String messageBody) {
        this.messageBody = messageBody;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("messageSubject")
    public String messageSubject;
    public UpdateShareByIdUpdateShareRequestBody withMessageSubject(String messageSubject) {
        this.messageSubject = messageSubject;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public UpdateShareByIdUpdateShareRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notificationEmails")
    public String[] notificationEmails;
    public UpdateShareByIdUpdateShareRequestBody withNotificationEmails(String[] notificationEmails) {
        this.notificationEmails = notificationEmails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("password")
    public String password;
    public UpdateShareByIdUpdateShareRequestBody withPassword(String password) {
        this.password = password;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recipients")
    public UpdateShareByIdUpdateShareRequestBodyRecipients[] recipients;
    public UpdateShareByIdUpdateShareRequestBody withRecipients(UpdateShareByIdUpdateShareRequestBodyRecipients[] recipients) {
        this.recipients = recipients;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requireEmail")
    public Boolean requireEmail;
    public UpdateShareByIdUpdateShareRequestBody withRequireEmail(Boolean requireEmail) {
        this.requireEmail = requireEmail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resources")
    public String[] resources;
    public UpdateShareByIdUpdateShareRequestBody withResources(String[] resources) {
        this.resources = resources;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public Long status;
    public UpdateShareByIdUpdateShareRequestBody withStatus(Long status) {
        this.status = status;
        return this;
    }
}