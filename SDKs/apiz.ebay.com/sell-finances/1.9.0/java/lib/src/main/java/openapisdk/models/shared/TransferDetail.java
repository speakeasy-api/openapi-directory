package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TransferDetail
 * This type is used by the transferDetail container, which provides more details about the transfer and the charge(s) associated with the transfer.
**/
public class TransferDetail {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("balanceAdjustment")
    public BalanceAdjustment balanceAdjustment;
    public TransferDetail withBalanceAdjustment(BalanceAdjustment balanceAdjustment) {
        this.balanceAdjustment = balanceAdjustment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("charges")
    public Charge[] charges;
    public TransferDetail withCharges(Charge[] charges) {
        this.charges = charges;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalChargeNetAmount")
    public Amount totalChargeNetAmount;
    public TransferDetail withTotalChargeNetAmount(Amount totalChargeNetAmount) {
        this.totalChargeNetAmount = totalChargeNetAmount;
        return this;
    }
}