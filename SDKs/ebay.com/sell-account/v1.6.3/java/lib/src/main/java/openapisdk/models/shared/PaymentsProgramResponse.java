package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PaymentsProgramResponse
 * The response object containing the sellers status with regards to the specified payment program.
**/
public class PaymentsProgramResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("marketplaceId")
    public String marketplaceId;
    public PaymentsProgramResponse withMarketplaceId(String marketplaceId) {
        this.marketplaceId = marketplaceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentsProgramType")
    public String paymentsProgramType;
    public PaymentsProgramResponse withPaymentsProgramType(String paymentsProgramType) {
        this.paymentsProgramType = paymentsProgramType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;
    public PaymentsProgramResponse withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("wasPreviouslyOptedIn")
    public Boolean wasPreviouslyOptedIn;
    public PaymentsProgramResponse withWasPreviouslyOptedIn(Boolean wasPreviouslyOptedIn) {
        this.wasPreviouslyOptedIn = wasPreviouslyOptedIn;
        return this;
    }
}