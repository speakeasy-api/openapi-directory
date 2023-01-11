package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FundingStrategy
 * This type defines how the Promoted Listing fee is calculated when fundingModel is set to COST_PER_SALE.
**/
public class FundingStrategy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bidPercentage")
    public String bidPercentage;
    public FundingStrategy withBidPercentage(String bidPercentage) {
        this.bidPercentage = bidPercentage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fundingModel")
    public String fundingModel;
    public FundingStrategy withFundingModel(String fundingModel) {
        this.fundingModel = fundingModel;
        return this;
    }
}