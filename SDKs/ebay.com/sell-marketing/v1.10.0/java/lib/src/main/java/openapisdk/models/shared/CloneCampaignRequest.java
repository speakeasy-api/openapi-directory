package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CloneCampaignRequest
 * This type defines the fields needed for a clone-campaign request.
**/
public class CloneCampaignRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("campaignName")
    public String campaignName;
    public CloneCampaignRequest withCampaignName(String campaignName) {
        this.campaignName = campaignName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endDate")
    public String endDate;
    public CloneCampaignRequest withEndDate(String endDate) {
        this.endDate = endDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fundingStrategy")
    public FundingStrategy fundingStrategy;
    public CloneCampaignRequest withFundingStrategy(FundingStrategy fundingStrategy) {
        this.fundingStrategy = fundingStrategy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startDate")
    public String startDate;
    public CloneCampaignRequest withStartDate(String startDate) {
        this.startDate = startDate;
        return this;
    }
}