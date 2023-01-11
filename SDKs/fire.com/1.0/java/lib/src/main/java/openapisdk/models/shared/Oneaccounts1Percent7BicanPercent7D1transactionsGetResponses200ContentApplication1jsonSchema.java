package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchema {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amountAfterCharges")
    public Long amountAfterCharges;
    public Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchema withAmountAfterCharges(Long amountAfterCharges) {
        this.amountAfterCharges = amountAfterCharges;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amountBeforeCharges")
    public Long amountBeforeCharges;
    public Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchema withAmountBeforeCharges(Long amountBeforeCharges) {
        this.amountBeforeCharges = amountBeforeCharges;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("balance")
    public Long balance;
    public Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchema withBalance(Long balance) {
        this.balance = balance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("card")
    public Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedCard card;
    public Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchema withCard(Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedCard card) {
        this.card = card;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currency")
    public OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsPropertiesCurrency currency;
    public Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchema withCurrency(OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsPropertiesCurrency currency) {
        this.currency = currency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("date")
    public OffsetDateTime date;
    public Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchema withDate(OffsetDateTime date) {
        this.date = date;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("dateAcknowledged")
    public OffsetDateTime dateAcknowledged;
    public Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchema withDateAcknowledged(OffsetDateTime dateAcknowledged) {
        this.dateAcknowledged = dateAcknowledged;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("feeAmount")
    public Long feeAmount;
    public Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchema withFeeAmount(Long feeAmount) {
        this.feeAmount = feeAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fxTradeDetails")
    public Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaFxTrade fxTradeDetails;
    public Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchema withFxTradeDetails(Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaFxTrade fxTradeDetails) {
        this.fxTradeDetails = fxTradeDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ican")
    public Long ican;
    public Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchema withIcan(Long ican) {
        this.ican = ican;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("myRef")
    public String myRef;
    public Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchema withMyRef(String myRef) {
        this.myRef = myRef;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentRequestPublicCode")
    public String paymentRequestPublicCode;
    public Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchema withPaymentRequestPublicCode(String paymentRequestPublicCode) {
        this.paymentRequestPublicCode = paymentRequestPublicCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("refId")
    public Long refId;
    public Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchema withRefId(Long refId) {
        this.refId = refId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("relatedParty")
    public Object relatedParty;
    public Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchema withRelatedParty(Object relatedParty) {
        this.relatedParty = relatedParty;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taxAmount")
    public Long taxAmount;
    public Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchema withTaxAmount(Long taxAmount) {
        this.taxAmount = taxAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("txnId")
    public Long txnId;
    public Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchema withTxnId(Long txnId) {
        this.txnId = txnId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchema withType(String type) {
        this.type = type;
        return this;
    }
}