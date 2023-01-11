package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateLongTermPricingResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LongTermPricingId")
    public String longTermPricingId;
    public CreateLongTermPricingResult withLongTermPricingId(String longTermPricingId) {
        this.longTermPricingId = longTermPricingId;
        return this;
    }
}