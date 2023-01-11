package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PreviousAssetPurchases {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("previous_purchases")
    public PreviousAssetPurchase[] previousPurchases;
    public PreviousAssetPurchases withPreviousPurchases(PreviousAssetPurchase[] previousPurchases) {
        this.previousPurchases = previousPurchases;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("result_count")
    public Integer resultCount;
    public PreviousAssetPurchases withResultCount(Integer resultCount) {
        this.resultCount = resultCount;
        return this;
    }
}