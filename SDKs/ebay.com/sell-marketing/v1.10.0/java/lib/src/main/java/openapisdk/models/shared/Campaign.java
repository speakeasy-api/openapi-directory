package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Campaign
 * This type defines the fields that describe an ad campaign.
**/
public class Campaign {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("campaignCriterion")
    public CampaignCriterion campaignCriterion;
    public Campaign withCampaignCriterion(CampaignCriterion campaignCriterion) {
        this.campaignCriterion = campaignCriterion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("campaignId")
    public String campaignId;
    public Campaign withCampaignId(String campaignId) {
        this.campaignId = campaignId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("campaignName")
    public String campaignName;
    public Campaign withCampaignName(String campaignName) {
        this.campaignName = campaignName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("campaignStatus")
    public String campaignStatus;
    public Campaign withCampaignStatus(String campaignStatus) {
        this.campaignStatus = campaignStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endDate")
    public String endDate;
    public Campaign withEndDate(String endDate) {
        this.endDate = endDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fundingStrategy")
    public FundingStrategy fundingStrategy;
    public Campaign withFundingStrategy(FundingStrategy fundingStrategy) {
        this.fundingStrategy = fundingStrategy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("marketplaceId")
    public String marketplaceId;
    public Campaign withMarketplaceId(String marketplaceId) {
        this.marketplaceId = marketplaceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startDate")
    public String startDate;
    public Campaign withStartDate(String startDate) {
        this.startDate = startDate;
        return this;
    }
}