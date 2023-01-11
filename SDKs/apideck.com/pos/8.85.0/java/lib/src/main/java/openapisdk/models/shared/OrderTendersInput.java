package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class OrderTendersInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amount")
    public Double amount;
    public OrderTendersInput withAmount(Double amount) {
        this.amount = amount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("buyer_tendered_cash_amount")
    public Long buyerTenderedCashAmount;
    public OrderTendersInput withBuyerTenderedCashAmount(Long buyerTenderedCashAmount) {
        this.buyerTenderedCashAmount = buyerTenderedCashAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("card")
    public PaymentCardInput card;
    public OrderTendersInput withCard(PaymentCardInput card) {
        this.card = card;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("card_entry_method")
    public OrderTendersCardEntryMethodEnum cardEntryMethod;
    public OrderTendersInput withCardEntryMethod(OrderTendersCardEntryMethodEnum cardEntryMethod) {
        this.cardEntryMethod = cardEntryMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("card_status")
    public OrderTendersCardStatusEnum cardStatus;
    public OrderTendersInput withCardStatus(OrderTendersCardStatusEnum cardStatus) {
        this.cardStatus = cardStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("change_back_cash_amount")
    public Long changeBackCashAmount;
    public OrderTendersInput withChangeBackCashAmount(Long changeBackCashAmount) {
        this.changeBackCashAmount = changeBackCashAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currency")
    public CurrencyEnum currency;
    public OrderTendersInput withCurrency(CurrencyEnum currency) {
        this.currency = currency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public OrderTendersInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("note")
    public String note;
    public OrderTendersInput withNote(String note) {
        this.note = note;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("percentage")
    public Double percentage;
    public OrderTendersInput withPercentage(Double percentage) {
        this.percentage = percentage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_amount")
    public Long totalAmount;
    public OrderTendersInput withTotalAmount(Long totalAmount) {
        this.totalAmount = totalAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_discount")
    public Long totalDiscount;
    public OrderTendersInput withTotalDiscount(Long totalDiscount) {
        this.totalDiscount = totalDiscount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_processing_fee")
    public Long totalProcessingFee;
    public OrderTendersInput withTotalProcessingFee(Long totalProcessingFee) {
        this.totalProcessingFee = totalProcessingFee;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_refund")
    public Long totalRefund;
    public OrderTendersInput withTotalRefund(Long totalRefund) {
        this.totalRefund = totalRefund;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_service_charge")
    public Long totalServiceCharge;
    public OrderTendersInput withTotalServiceCharge(Long totalServiceCharge) {
        this.totalServiceCharge = totalServiceCharge;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_tax")
    public Long totalTax;
    public OrderTendersInput withTotalTax(Long totalTax) {
        this.totalTax = totalTax;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_tip")
    public Long totalTip;
    public OrderTendersInput withTotalTip(Long totalTip) {
        this.totalTip = totalTip;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public OrderTendersTypeEnum type;
    public OrderTendersInput withType(OrderTendersTypeEnum type) {
        this.type = type;
        return this;
    }
}