package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyCardPayment {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cardMerchant")
    public Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyCardPaymentCardMerchant cardMerchant;
    public Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyCardPayment withCardMerchant(Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyCardPaymentCardMerchant cardMerchant) {
        this.cardMerchant = cardMerchant;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyCardPaymentTypeEnum type;
    public Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyCardPayment withType(Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyCardPaymentTypeEnum type) {
        this.type = type;
        return this;
    }
}