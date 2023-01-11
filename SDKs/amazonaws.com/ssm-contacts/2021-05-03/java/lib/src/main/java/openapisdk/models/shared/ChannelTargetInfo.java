package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ChannelTargetInfo
 * Information about the contact channel that Incident Manager uses to engage the contact.
**/
public class ChannelTargetInfo {
    @JsonProperty("ContactChannelId")
    public String contactChannelId;
    public ChannelTargetInfo withContactChannelId(String contactChannelId) {
        this.contactChannelId = contactChannelId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RetryIntervalInMinutes")
    public Long retryIntervalInMinutes;
    public ChannelTargetInfo withRetryIntervalInMinutes(Long retryIntervalInMinutes) {
        this.retryIntervalInMinutes = retryIntervalInMinutes;
        return this;
    }
}