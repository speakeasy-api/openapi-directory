package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EmailChannelResponse
 * Provides information about the status and settings of the email channel for an application.
**/
public class EmailChannelResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ApplicationId")
    public String applicationId;
    public EmailChannelResponse withApplicationId(String applicationId) {
        this.applicationId = applicationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ConfigurationSet")
    public String configurationSet;
    public EmailChannelResponse withConfigurationSet(String configurationSet) {
        this.configurationSet = configurationSet;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CreationDate")
    public String creationDate;
    public EmailChannelResponse withCreationDate(String creationDate) {
        this.creationDate = creationDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Enabled")
    public Boolean enabled;
    public EmailChannelResponse withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FromAddress")
    public String fromAddress;
    public EmailChannelResponse withFromAddress(String fromAddress) {
        this.fromAddress = fromAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HasCredential")
    public Boolean hasCredential;
    public EmailChannelResponse withHasCredential(Boolean hasCredential) {
        this.hasCredential = hasCredential;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Id")
    public String id;
    public EmailChannelResponse withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Identity")
    public String identity;
    public EmailChannelResponse withIdentity(String identity) {
        this.identity = identity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IsArchived")
    public Boolean isArchived;
    public EmailChannelResponse withIsArchived(Boolean isArchived) {
        this.isArchived = isArchived;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LastModifiedBy")
    public String lastModifiedBy;
    public EmailChannelResponse withLastModifiedBy(String lastModifiedBy) {
        this.lastModifiedBy = lastModifiedBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LastModifiedDate")
    public String lastModifiedDate;
    public EmailChannelResponse withLastModifiedDate(String lastModifiedDate) {
        this.lastModifiedDate = lastModifiedDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MessagesPerSecond")
    public Long messagesPerSecond;
    public EmailChannelResponse withMessagesPerSecond(Long messagesPerSecond) {
        this.messagesPerSecond = messagesPerSecond;
        return this;
    }
    @JsonProperty("Platform")
    public String platform;
    public EmailChannelResponse withPlatform(String platform) {
        this.platform = platform;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RoleArn")
    public String roleArn;
    public EmailChannelResponse withRoleArn(String roleArn) {
        this.roleArn = roleArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Version")
    public Long version;
    public EmailChannelResponse withVersion(Long version) {
        this.version = version;
        return this;
    }
}