package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AdmChannelResponse
 * Provides information about the status and settings of the ADM (Amazon Device Messaging) channel for an application.
**/
public class AdmChannelResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ApplicationId")
    public String applicationId;
    public AdmChannelResponse withApplicationId(String applicationId) {
        this.applicationId = applicationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CreationDate")
    public String creationDate;
    public AdmChannelResponse withCreationDate(String creationDate) {
        this.creationDate = creationDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Enabled")
    public Boolean enabled;
    public AdmChannelResponse withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HasCredential")
    public Boolean hasCredential;
    public AdmChannelResponse withHasCredential(Boolean hasCredential) {
        this.hasCredential = hasCredential;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Id")
    public String id;
    public AdmChannelResponse withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IsArchived")
    public Boolean isArchived;
    public AdmChannelResponse withIsArchived(Boolean isArchived) {
        this.isArchived = isArchived;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LastModifiedBy")
    public String lastModifiedBy;
    public AdmChannelResponse withLastModifiedBy(String lastModifiedBy) {
        this.lastModifiedBy = lastModifiedBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LastModifiedDate")
    public String lastModifiedDate;
    public AdmChannelResponse withLastModifiedDate(String lastModifiedDate) {
        this.lastModifiedDate = lastModifiedDate;
        return this;
    }
    @JsonProperty("Platform")
    public String platform;
    public AdmChannelResponse withPlatform(String platform) {
        this.platform = platform;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Version")
    public Long version;
    public AdmChannelResponse withVersion(Long version) {
        this.version = version;
        return this;
    }
}