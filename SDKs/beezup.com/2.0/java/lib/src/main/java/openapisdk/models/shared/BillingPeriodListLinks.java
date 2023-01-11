package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BillingPeriodListLinks {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("self")
    public LinksGetBillingPeriodsLink self;
    public BillingPeriodListLinks withSelf(LinksGetBillingPeriodsLink self) {
        this.self = self;
        return this;
    }
}