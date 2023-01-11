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
 * ShareAttributes
 * Attributes of the share including the name, path and share recipients. 
**/
public class ShareAttributes {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accessDescription")
    public String accessDescription;
    public ShareAttributes withAccessDescription(String accessDescription) {
        this.accessDescription = accessDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accessMode")
    public AccessMode accessMode;
    public ShareAttributes withAccessMode(AccessMode accessMode) {
        this.accessMode = accessMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("created")
    public OffsetDateTime created;
    public ShareAttributes withCreated(OffsetDateTime created) {
        this.created = created;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("embed")
    public Boolean embed;
    public ShareAttributes withEmbed(Boolean embed) {
        this.embed = embed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expiration")
    public String expiration;
    public ShareAttributes withExpiration(String expiration) {
        this.expiration = expiration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expired")
    public Boolean expired;
    public ShareAttributes withExpired(Boolean expired) {
        this.expired = expired;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fileDropCreateFolders")
    public Boolean fileDropCreateFolders;
    public ShareAttributes withFileDropCreateFolders(Boolean fileDropCreateFolders) {
        this.fileDropCreateFolders = fileDropCreateFolders;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("formId")
    public Long formId;
    public ShareAttributes withFormId(Long formId) {
        this.formId = formId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hasNotification")
    public Boolean hasNotification;
    public ShareAttributes withHasNotification(Boolean hasNotification) {
        this.hasNotification = hasNotification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hasPassword")
    public Boolean hasPassword;
    public ShareAttributes withHasPassword(Boolean hasPassword) {
        this.hasPassword = hasPassword;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hash")
    public String hash;
    public ShareAttributes withHash(String hash) {
        this.hash = hash;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inherited")
    public Boolean inherited;
    public ShareAttributes withInherited(Boolean inherited) {
        this.inherited = inherited;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("messages")
    public ShareMessage[] messages;
    public ShareAttributes withMessages(ShareMessage[] messages) {
        this.messages = messages;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("modified")
    public OffsetDateTime modified;
    public ShareAttributes withModified(OffsetDateTime modified) {
        this.modified = modified;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ShareAttributes withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ownerHash")
    public String ownerHash;
    public ShareAttributes withOwnerHash(String ownerHash) {
        this.ownerHash = ownerHash;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paths")
    public String[] paths;
    public ShareAttributes withPaths(String[] paths) {
        this.paths = paths;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("public")
    public Boolean public_;
    public ShareAttributes withPublic(Boolean public_) {
        this.public_ = public_;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recipients")
    public ShareRecipient[] recipients;
    public ShareAttributes withRecipients(ShareRecipient[] recipients) {
        this.recipients = recipients;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requireEmail")
    public Boolean requireEmail;
    public ShareAttributes withRequireEmail(Boolean requireEmail) {
        this.requireEmail = requireEmail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("resent")
    public OffsetDateTime resent;
    public ShareAttributes withResent(OffsetDateTime resent) {
        this.resent = resent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public Integer status;
    public ShareAttributes withStatus(Integer status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("trackingStatus")
    public ShareAttributesTrackingStatusEnum trackingStatus;
    public ShareAttributes withTrackingStatus(ShareAttributesTrackingStatusEnum trackingStatus) {
        this.trackingStatus = trackingStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public ShareAttributesTypeEnum type;
    public ShareAttributes withType(ShareAttributesTypeEnum type) {
        this.type = type;
        return this;
    }
}