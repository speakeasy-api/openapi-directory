package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Fee
 * This type is used to display fees that are automatically deducted from seller payouts.
**/
public class Fee {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amount")
    public Amount amount;
    public Fee withAmount(Amount amount) {
        this.amount = amount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("feeMemo")
    public String feeMemo;
    public Fee withFeeMemo(String feeMemo) {
        this.feeMemo = feeMemo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("feeType")
    public String feeType;
    public Fee withFeeType(String feeType) {
        this.feeType = feeType;
        return this;
    }
}