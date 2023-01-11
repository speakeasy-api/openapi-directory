package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SellerFundsSummaryResponse
 * This type is used by the response payload of the getSellerFundsSummary method. All of the funds returned in getSellerFundsSummary are funds that have not yet been paid to the seller through a seller payout. If there are no funds that are pending, on hold, or being processed for the seller's account, no response payload is returned, and an http status code of 204 - No Content is returned instead.
**/
public class SellerFundsSummaryResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("availableFunds")
    public Amount availableFunds;
    public SellerFundsSummaryResponse withAvailableFunds(Amount availableFunds) {
        this.availableFunds = availableFunds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fundsOnHold")
    public Amount fundsOnHold;
    public SellerFundsSummaryResponse withFundsOnHold(Amount fundsOnHold) {
        this.fundsOnHold = fundsOnHold;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("processingFunds")
    public Amount processingFunds;
    public SellerFundsSummaryResponse withProcessingFunds(Amount processingFunds) {
        this.processingFunds = processingFunds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalFunds")
    public Amount totalFunds;
    public SellerFundsSummaryResponse withTotalFunds(Amount totalFunds) {
        this.totalFunds = totalFunds;
        return this;
    }
}