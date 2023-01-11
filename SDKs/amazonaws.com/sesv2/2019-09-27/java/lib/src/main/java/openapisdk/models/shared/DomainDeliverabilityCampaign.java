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
 * DomainDeliverabilityCampaign
 * An object that contains the deliverability data for a specific campaign. This data is available for a campaign only if the campaign sent email by using a domain that the Deliverability dashboard is enabled for (<code>PutDeliverabilityDashboardOption</code> operation).
**/
public class DomainDeliverabilityCampaign {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CampaignId")
    public String campaignId;
    public DomainDeliverabilityCampaign withCampaignId(String campaignId) {
        this.campaignId = campaignId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DeleteRate")
    public Double deleteRate;
    public DomainDeliverabilityCampaign withDeleteRate(Double deleteRate) {
        this.deleteRate = deleteRate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Esps")
    public String[] esps;
    public DomainDeliverabilityCampaign withEsps(String[] esps) {
        this.esps = esps;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("FirstSeenDateTime")
    public OffsetDateTime firstSeenDateTime;
    public DomainDeliverabilityCampaign withFirstSeenDateTime(OffsetDateTime firstSeenDateTime) {
        this.firstSeenDateTime = firstSeenDateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FromAddress")
    public String fromAddress;
    public DomainDeliverabilityCampaign withFromAddress(String fromAddress) {
        this.fromAddress = fromAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ImageUrl")
    public String imageUrl;
    public DomainDeliverabilityCampaign withImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InboxCount")
    public Long inboxCount;
    public DomainDeliverabilityCampaign withInboxCount(Long inboxCount) {
        this.inboxCount = inboxCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("LastSeenDateTime")
    public OffsetDateTime lastSeenDateTime;
    public DomainDeliverabilityCampaign withLastSeenDateTime(OffsetDateTime lastSeenDateTime) {
        this.lastSeenDateTime = lastSeenDateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ProjectedVolume")
    public Long projectedVolume;
    public DomainDeliverabilityCampaign withProjectedVolume(Long projectedVolume) {
        this.projectedVolume = projectedVolume;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReadDeleteRate")
    public Double readDeleteRate;
    public DomainDeliverabilityCampaign withReadDeleteRate(Double readDeleteRate) {
        this.readDeleteRate = readDeleteRate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReadRate")
    public Double readRate;
    public DomainDeliverabilityCampaign withReadRate(Double readRate) {
        this.readRate = readRate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SendingIps")
    public String[] sendingIps;
    public DomainDeliverabilityCampaign withSendingIps(String[] sendingIps) {
        this.sendingIps = sendingIps;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SpamCount")
    public Long spamCount;
    public DomainDeliverabilityCampaign withSpamCount(Long spamCount) {
        this.spamCount = spamCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Subject")
    public String subject;
    public DomainDeliverabilityCampaign withSubject(String subject) {
        this.subject = subject;
        return this;
    }
}