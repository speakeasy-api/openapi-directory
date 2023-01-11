package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateLongTermPricingRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IsLongTermPricingAutoRenew")
    public Boolean isLongTermPricingAutoRenew;
    public CreateLongTermPricingRequest withIsLongTermPricingAutoRenew(Boolean isLongTermPricingAutoRenew) {
        this.isLongTermPricingAutoRenew = isLongTermPricingAutoRenew;
        return this;
    }
    @JsonProperty("LongTermPricingType")
    public LongTermPricingTypeEnum longTermPricingType;
    public CreateLongTermPricingRequest withLongTermPricingType(LongTermPricingTypeEnum longTermPricingType) {
        this.longTermPricingType = longTermPricingType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SnowballType")
    public SnowballTypeEnum snowballType;
    public CreateLongTermPricingRequest withSnowballType(SnowballTypeEnum snowballType) {
        this.snowballType = snowballType;
        return this;
    }
}