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
 * Campaign
 * Describes a deployed solution version, otherwise known as a campaign. For more information on campaigns, see <a>CreateCampaign</a>.
**/
public class Campaign {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("campaignArn")
    public String campaignArn;
    public Campaign withCampaignArn(String campaignArn) {
        this.campaignArn = campaignArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("campaignConfig")
    public CampaignConfig campaignConfig;
    public Campaign withCampaignConfig(CampaignConfig campaignConfig) {
        this.campaignConfig = campaignConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("creationDateTime")
    public OffsetDateTime creationDateTime;
    public Campaign withCreationDateTime(OffsetDateTime creationDateTime) {
        this.creationDateTime = creationDateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("failureReason")
    public String failureReason;
    public Campaign withFailureReason(String failureReason) {
        this.failureReason = failureReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("lastUpdatedDateTime")
    public OffsetDateTime lastUpdatedDateTime;
    public Campaign withLastUpdatedDateTime(OffsetDateTime lastUpdatedDateTime) {
        this.lastUpdatedDateTime = lastUpdatedDateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("latestCampaignUpdate")
    public CampaignUpdateSummary latestCampaignUpdate;
    public Campaign withLatestCampaignUpdate(CampaignUpdateSummary latestCampaignUpdate) {
        this.latestCampaignUpdate = latestCampaignUpdate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minProvisionedTPS")
    public Long minProvisionedTPS;
    public Campaign withMinProvisionedTps(Long minProvisionedTPS) {
        this.minProvisionedTPS = minProvisionedTPS;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Campaign withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("solutionVersionArn")
    public String solutionVersionArn;
    public Campaign withSolutionVersionArn(String solutionVersionArn) {
        this.solutionVersionArn = solutionVersionArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;
    public Campaign withStatus(String status) {
        this.status = status;
        return this;
    }
}