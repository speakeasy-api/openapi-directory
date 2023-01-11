package openapisdk.models.operations;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class GetTransactionsByIdTransaction {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amountAfterCharges")
    public Long amountAfterCharges;
    public GetTransactionsByIdTransaction withAmountAfterCharges(Long amountAfterCharges) {
        this.amountAfterCharges = amountAfterCharges;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amountBeforeCharges")
    public Long amountBeforeCharges;
    public GetTransactionsByIdTransaction withAmountBeforeCharges(Long amountBeforeCharges) {
        this.amountBeforeCharges = amountBeforeCharges;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("balance")
    public Long balance;
    public GetTransactionsByIdTransaction withBalance(Long balance) {
        this.balance = balance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("card")
    public GetTransactionsByIdTransactionRelatedCard card;
    public GetTransactionsByIdTransaction withCard(GetTransactionsByIdTransactionRelatedCard card) {
        this.card = card;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currency")
    public openapisdk.models.shared.OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsPropertiesCurrency currency;
    public GetTransactionsByIdTransaction withCurrency(openapisdk.models.shared.OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsPropertiesCurrency currency) {
        this.currency = currency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("date")
    public OffsetDateTime date;
    public GetTransactionsByIdTransaction withDate(OffsetDateTime date) {
        this.date = date;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("dateAcknowledged")
    public OffsetDateTime dateAcknowledged;
    public GetTransactionsByIdTransaction withDateAcknowledged(OffsetDateTime dateAcknowledged) {
        this.dateAcknowledged = dateAcknowledged;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("feeAmount")
    public Long feeAmount;
    public GetTransactionsByIdTransaction withFeeAmount(Long feeAmount) {
        this.feeAmount = feeAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fxTradeDetails")
    public GetTransactionsByIdTransactionFxTrade fxTradeDetails;
    public GetTransactionsByIdTransaction withFxTradeDetails(GetTransactionsByIdTransactionFxTrade fxTradeDetails) {
        this.fxTradeDetails = fxTradeDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ican")
    public Long ican;
    public GetTransactionsByIdTransaction withIcan(Long ican) {
        this.ican = ican;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("myRef")
    public String myRef;
    public GetTransactionsByIdTransaction withMyRef(String myRef) {
        this.myRef = myRef;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentRequestPublicCode")
    public String paymentRequestPublicCode;
    public GetTransactionsByIdTransaction withPaymentRequestPublicCode(String paymentRequestPublicCode) {
        this.paymentRequestPublicCode = paymentRequestPublicCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("refId")
    public Long refId;
    public GetTransactionsByIdTransaction withRefId(Long refId) {
        this.refId = refId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("relatedParty")
    public Object relatedParty;
    public GetTransactionsByIdTransaction withRelatedParty(Object relatedParty) {
        this.relatedParty = relatedParty;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taxAmount")
    public Long taxAmount;
    public GetTransactionsByIdTransaction withTaxAmount(Long taxAmount) {
        this.taxAmount = taxAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("txnId")
    public Long txnId;
    public GetTransactionsByIdTransaction withTxnId(Long txnId) {
        this.txnId = txnId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public GetTransactionsByIdTransaction withType(String type) {
        this.type = type;
        return this;
    }
}