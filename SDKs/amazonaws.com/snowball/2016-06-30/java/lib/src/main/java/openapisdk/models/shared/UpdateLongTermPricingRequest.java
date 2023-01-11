package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateLongTermPricingRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IsLongTermPricingAutoRenew")
    public Boolean isLongTermPricingAutoRenew;
    public UpdateLongTermPricingRequest withIsLongTermPricingAutoRenew(Boolean isLongTermPricingAutoRenew) {
        this.isLongTermPricingAutoRenew = isLongTermPricingAutoRenew;
        return this;
    }
    @JsonProperty("LongTermPricingId")
    public String longTermPricingId;
    public UpdateLongTermPricingRequest withLongTermPricingId(String longTermPricingId) {
        this.longTermPricingId = longTermPricingId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReplacementJob")
    public String replacementJob;
    public UpdateLongTermPricingRequest withReplacementJob(String replacementJob) {
        this.replacementJob = replacementJob;
        return this;
    }
}