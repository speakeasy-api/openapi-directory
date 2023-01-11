package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class WebhookActivityAttributesV2WebhookV2DetailsWebhookV2EventDataShare {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accessDescription")
    public String accessDescription;
    public WebhookActivityAttributesV2WebhookV2DetailsWebhookV2EventDataShare withAccessDescription(String accessDescription) {
        this.accessDescription = accessDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accessMode")
    public AccessMode accessMode;
    public WebhookActivityAttributesV2WebhookV2DetailsWebhookV2EventDataShare withAccessMode(AccessMode accessMode) {
        this.accessMode = accessMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assets")
    public String[] assets;
    public WebhookActivityAttributesV2WebhookV2DetailsWebhookV2EventDataShare withAssets(String[] assets) {
        this.assets = assets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("created")
    public OffsetDateTime created;
    public WebhookActivityAttributesV2WebhookV2DetailsWebhookV2EventDataShare withCreated(OffsetDateTime created) {
        this.created = created;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("embed")
    public Boolean embed;
    public WebhookActivityAttributesV2WebhookV2DetailsWebhookV2EventDataShare withEmbed(Boolean embed) {
        this.embed = embed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expiration")
    public String expiration;
    public WebhookActivityAttributesV2WebhookV2DetailsWebhookV2EventDataShare withExpiration(String expiration) {
        this.expiration = expiration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expired")
    public Boolean expired;
    public WebhookActivityAttributesV2WebhookV2DetailsWebhookV2EventDataShare withExpired(Boolean expired) {
        this.expired = expired;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fileDropCreateFolders")
    public Boolean fileDropCreateFolders;
    public WebhookActivityAttributesV2WebhookV2DetailsWebhookV2EventDataShare withFileDropCreateFolders(Boolean fileDropCreateFolders) {
        this.fileDropCreateFolders = fileDropCreateFolders;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("formId")
    public Long formId;
    public WebhookActivityAttributesV2WebhookV2DetailsWebhookV2EventDataShare withFormId(Long formId) {
        this.formId = formId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hasNotification")
    public Boolean hasNotification;
    public WebhookActivityAttributesV2WebhookV2DetailsWebhookV2EventDataShare withHasNotification(Boolean hasNotification) {
        this.hasNotification = hasNotification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hasPassword")
    public Boolean hasPassword;
    public WebhookActivityAttributesV2WebhookV2DetailsWebhookV2EventDataShare withHasPassword(Boolean hasPassword) {
        this.hasPassword = hasPassword;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hash")
    public String hash;
    public WebhookActivityAttributesV2WebhookV2DetailsWebhookV2EventDataShare withHash(String hash) {
        this.hash = hash;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public WebhookActivityAttributesV2WebhookV2DetailsWebhookV2EventDataShare withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inherited")
    public Boolean inherited;
    public WebhookActivityAttributesV2WebhookV2DetailsWebhookV2EventDataShare withInherited(Boolean inherited) {
        this.inherited = inherited;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isPublic")
    public Boolean isPublic;
    public WebhookActivityAttributesV2WebhookV2DetailsWebhookV2EventDataShare withIsPublic(Boolean isPublic) {
        this.isPublic = isPublic;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("messages")
    public ShareMessage[] messages;
    public WebhookActivityAttributesV2WebhookV2DetailsWebhookV2EventDataShare withMessages(ShareMessage[] messages) {
        this.messages = messages;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("modified")
    public OffsetDateTime modified;
    public WebhookActivityAttributesV2WebhookV2DetailsWebhookV2EventDataShare withModified(OffsetDateTime modified) {
        this.modified = modified;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public WebhookActivityAttributesV2WebhookV2DetailsWebhookV2EventDataShare withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ownerHash")
    public String ownerHash;
    public WebhookActivityAttributesV2WebhookV2DetailsWebhookV2EventDataShare withOwnerHash(String ownerHash) {
        this.ownerHash = ownerHash;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paths")
    public String[] paths;
    public WebhookActivityAttributesV2WebhookV2DetailsWebhookV2EventDataShare withPaths(String[] paths) {
        this.paths = paths;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recipients")
    public ShareRecipient[] recipients;
    public WebhookActivityAttributesV2WebhookV2DetailsWebhookV2EventDataShare withRecipients(ShareRecipient[] recipients) {
        this.recipients = recipients;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requireEmail")
    public Boolean requireEmail;
    public WebhookActivityAttributesV2WebhookV2DetailsWebhookV2EventDataShare withRequireEmail(Boolean requireEmail) {
        this.requireEmail = requireEmail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resent")
    public Boolean resent;
    public WebhookActivityAttributesV2WebhookV2DetailsWebhookV2EventDataShare withResent(Boolean resent) {
        this.resent = resent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public Long status;
    public WebhookActivityAttributesV2WebhookV2DetailsWebhookV2EventDataShare withStatus(Long status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("trackingStatus")
    public String trackingStatus;
    public WebhookActivityAttributesV2WebhookV2DetailsWebhookV2EventDataShare withTrackingStatus(String trackingStatus) {
        this.trackingStatus = trackingStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public WebhookActivityAttributesV2WebhookV2DetailsWebhookV2EventDataShare withType(String type) {
        this.type = type;
        return this;
    }
}