package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CampaignLimits
 * For a campaign, specifies limits on the messages that the campaign can send. For an application, specifies the default limits for messages that campaigns in the application can send.
**/
public class CampaignLimits {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Daily")
    public Long daily;
    public CampaignLimits withDaily(Long daily) {
        this.daily = daily;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaximumDuration")
    public Long maximumDuration;
    public CampaignLimits withMaximumDuration(Long maximumDuration) {
        this.maximumDuration = maximumDuration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MessagesPerSecond")
    public Long messagesPerSecond;
    public CampaignLimits withMessagesPerSecond(Long messagesPerSecond) {
        this.messagesPerSecond = messagesPerSecond;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Session")
    public Long session;
    public CampaignLimits withSession(Long session) {
        this.session = session;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Total")
    public Long total;
    public CampaignLimits withTotal(Long total) {
        this.total = total;
        return this;
    }
}