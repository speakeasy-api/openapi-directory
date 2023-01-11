package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RecurringCharge
 * Specifies whether charges for devices are recurring.
**/
public class RecurringCharge {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cost")
    public MonetaryAmount cost;
    public RecurringCharge withCost(MonetaryAmount cost) {
        this.cost = cost;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("frequency")
    public RecurringChargeFrequencyEnum frequency;
    public RecurringCharge withFrequency(RecurringChargeFrequencyEnum frequency) {
        this.frequency = frequency;
        return this;
    }
}