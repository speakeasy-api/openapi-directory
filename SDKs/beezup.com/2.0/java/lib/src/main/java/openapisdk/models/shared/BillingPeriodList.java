package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class BillingPeriodList {
    @JsonProperty("billingPeriods")
    public BillingPeriod[] billingPeriods;
    public BillingPeriodList withBillingPeriods(BillingPeriod[] billingPeriods) {
        this.billingPeriods = billingPeriods;
        return this;
    }
    @JsonProperty("links")
    public BillingPeriodListLinks links;
    public BillingPeriodList withLinks(BillingPeriodListLinks links) {
        this.links = links;
        return this;
    }
}