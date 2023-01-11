package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetTransactionsByIdTransactionRelatedPartyRelatedPartyCardPayment {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cardMerchant")
    public GetTransactionsByIdTransactionRelatedPartyRelatedPartyCardPaymentCardMerchant cardMerchant;
    public GetTransactionsByIdTransactionRelatedPartyRelatedPartyCardPayment withCardMerchant(GetTransactionsByIdTransactionRelatedPartyRelatedPartyCardPaymentCardMerchant cardMerchant) {
        this.cardMerchant = cardMerchant;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public GetTransactionsByIdTransactionRelatedPartyRelatedPartyCardPaymentTypeEnum type;
    public GetTransactionsByIdTransactionRelatedPartyRelatedPartyCardPayment withType(GetTransactionsByIdTransactionRelatedPartyRelatedPartyCardPaymentTypeEnum type) {
        this.type = type;
        return this;
    }
}