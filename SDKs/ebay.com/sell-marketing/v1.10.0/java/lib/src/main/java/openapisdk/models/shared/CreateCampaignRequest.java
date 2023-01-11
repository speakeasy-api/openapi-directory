package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateCampaignRequest
 * This type defines the fields needed to create a campaign. To create a campaign, you need to specify a name, start and end dates, funding, marketplace, and optionally the criterion (selection rules).
**/
public class CreateCampaignRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("campaignCriterion")
    public CampaignCriterion campaignCriterion;
    public CreateCampaignRequest withCampaignCriterion(CampaignCriterion campaignCriterion) {
        this.campaignCriterion = campaignCriterion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("campaignName")
    public String campaignName;
    public CreateCampaignRequest withCampaignName(String campaignName) {
        this.campaignName = campaignName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endDate")
    public String endDate;
    public CreateCampaignRequest withEndDate(String endDate) {
        this.endDate = endDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fundingStrategy")
    public FundingStrategy fundingStrategy;
    public CreateCampaignRequest withFundingStrategy(FundingStrategy fundingStrategy) {
        this.fundingStrategy = fundingStrategy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("marketplaceId")
    public String marketplaceId;
    public CreateCampaignRequest withMarketplaceId(String marketplaceId) {
        this.marketplaceId = marketplaceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startDate")
    public String startDate;
    public CreateCampaignRequest withStartDate(String startDate) {
        this.startDate = startDate;
        return this;
    }
}