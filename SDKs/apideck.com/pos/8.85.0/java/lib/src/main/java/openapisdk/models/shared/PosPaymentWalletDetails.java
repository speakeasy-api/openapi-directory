package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PosPaymentWalletDetails
 * Wallet details for this payment. This field is currently not available. Reach out to our team for more info.
**/
public class PosPaymentWalletDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public PosPaymentWalletDetailsStatusEnum status;
    public PosPaymentWalletDetails withStatus(PosPaymentWalletDetailsStatusEnum status) {
        this.status = status;
        return this;
    }
}