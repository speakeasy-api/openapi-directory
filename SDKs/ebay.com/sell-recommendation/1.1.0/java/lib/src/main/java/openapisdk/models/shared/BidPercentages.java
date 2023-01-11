package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BidPercentages
 * A complex type that returns data related to Promoted Listings bid percentages.
**/
public class BidPercentages {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("basis")
    public String basis;
    public BidPercentages withBasis(String basis) {
        this.basis = basis;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public BidPercentages withValue(String value) {
        this.value = value;
        return this;
    }
}