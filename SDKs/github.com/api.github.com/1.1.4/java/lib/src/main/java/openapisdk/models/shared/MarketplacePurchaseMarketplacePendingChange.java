package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class MarketplacePurchaseMarketplacePendingChange {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("effective_date")
    public String effectiveDate;
    public MarketplacePurchaseMarketplacePendingChange withEffectiveDate(String effectiveDate) {
        this.effectiveDate = effectiveDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public MarketplacePurchaseMarketplacePendingChange withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_installed")
    public Boolean isInstalled;
    public MarketplacePurchaseMarketplacePendingChange withIsInstalled(Boolean isInstalled) {
        this.isInstalled = isInstalled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("plan")
    public MarketplaceListingPlan plan;
    public MarketplacePurchaseMarketplacePendingChange withPlan(MarketplaceListingPlan plan) {
        this.plan = plan;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unit_count")
    public Long unitCount;
    public MarketplacePurchaseMarketplacePendingChange withUnitCount(Long unitCount) {
        this.unitCount = unitCount;
        return this;
    }
}