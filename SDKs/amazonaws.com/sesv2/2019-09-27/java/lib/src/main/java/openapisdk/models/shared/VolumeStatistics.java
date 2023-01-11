package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VolumeStatistics
 * An object that contains information about the amount of email that was delivered to recipients.
**/
public class VolumeStatistics {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InboxRawCount")
    public Long inboxRawCount;
    public VolumeStatistics withInboxRawCount(Long inboxRawCount) {
        this.inboxRawCount = inboxRawCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ProjectedInbox")
    public Long projectedInbox;
    public VolumeStatistics withProjectedInbox(Long projectedInbox) {
        this.projectedInbox = projectedInbox;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ProjectedSpam")
    public Long projectedSpam;
    public VolumeStatistics withProjectedSpam(Long projectedSpam) {
        this.projectedSpam = projectedSpam;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SpamRawCount")
    public Long spamRawCount;
    public VolumeStatistics withSpamRawCount(Long spamRawCount) {
        this.spamRawCount = spamRawCount;
        return this;
    }
}