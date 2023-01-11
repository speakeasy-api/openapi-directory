package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BalanceAdjustment
 * This type is used by the balanceAdjustment container, which shows the seller payout balance that will be applied toward the charges outlined in the charges array.
**/
public class BalanceAdjustment {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("adjustmentAmount")
    public Amount adjustmentAmount;
    public BalanceAdjustment withAdjustmentAmount(Amount adjustmentAmount) {
        this.adjustmentAmount = adjustmentAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("adjustmentType")
    public String adjustmentType;
    public BalanceAdjustment withAdjustmentType(String adjustmentType) {
        this.adjustmentType = adjustmentType;
        return this;
    }
}