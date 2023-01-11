package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ApnsChannelResponse
 * Provides information about the status and settings of the APNs (Apple Push Notification service) channel for an application.
**/
public class ApnsChannelResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ApplicationId")
    public String applicationId;
    public ApnsChannelResponse withApplicationId(String applicationId) {
        this.applicationId = applicationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CreationDate")
    public String creationDate;
    public ApnsChannelResponse withCreationDate(String creationDate) {
        this.creationDate = creationDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DefaultAuthenticationMethod")
    public String defaultAuthenticationMethod;
    public ApnsChannelResponse withDefaultAuthenticationMethod(String defaultAuthenticationMethod) {
        this.defaultAuthenticationMethod = defaultAuthenticationMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Enabled")
    public Boolean enabled;
    public ApnsChannelResponse withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HasCredential")
    public Boolean hasCredential;
    public ApnsChannelResponse withHasCredential(Boolean hasCredential) {
        this.hasCredential = hasCredential;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HasTokenKey")
    public Boolean hasTokenKey;
    public ApnsChannelResponse withHasTokenKey(Boolean hasTokenKey) {
        this.hasTokenKey = hasTokenKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Id")
    public String id;
    public ApnsChannelResponse withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IsArchived")
    public Boolean isArchived;
    public ApnsChannelResponse withIsArchived(Boolean isArchived) {
        this.isArchived = isArchived;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LastModifiedBy")
    public String lastModifiedBy;
    public ApnsChannelResponse withLastModifiedBy(String lastModifiedBy) {
        this.lastModifiedBy = lastModifiedBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LastModifiedDate")
    public String lastModifiedDate;
    public ApnsChannelResponse withLastModifiedDate(String lastModifiedDate) {
        this.lastModifiedDate = lastModifiedDate;
        return this;
    }
    @JsonProperty("Platform")
    public String platform;
    public ApnsChannelResponse withPlatform(String platform) {
        this.platform = platform;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Version")
    public Long version;
    public ApnsChannelResponse withVersion(Long version) {
        this.version = version;
        return this;
    }
}