package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class OrderTenders {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amount")
    public Double amount;
    public OrderTenders withAmount(Double amount) {
        this.amount = amount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("buyer_tendered_cash_amount")
    public Long buyerTenderedCashAmount;
    public OrderTenders withBuyerTenderedCashAmount(Long buyerTenderedCashAmount) {
        this.buyerTenderedCashAmount = buyerTenderedCashAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("card")
    public PaymentCard card;
    public OrderTenders withCard(PaymentCard card) {
        this.card = card;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("card_entry_method")
    public OrderTendersCardEntryMethodEnum cardEntryMethod;
    public OrderTenders withCardEntryMethod(OrderTendersCardEntryMethodEnum cardEntryMethod) {
        this.cardEntryMethod = cardEntryMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("card_status")
    public OrderTendersCardStatusEnum cardStatus;
    public OrderTenders withCardStatus(OrderTendersCardStatusEnum cardStatus) {
        this.cardStatus = cardStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("change_back_cash_amount")
    public Long changeBackCashAmount;
    public OrderTenders withChangeBackCashAmount(Long changeBackCashAmount) {
        this.changeBackCashAmount = changeBackCashAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currency")
    public CurrencyEnum currency;
    public OrderTenders withCurrency(CurrencyEnum currency) {
        this.currency = currency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public OrderTenders withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("location_id")
    public String locationId;
    public OrderTenders withLocationId(String locationId) {
        this.locationId = locationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public OrderTenders withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("note")
    public String note;
    public OrderTenders withNote(String note) {
        this.note = note;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payment_id")
    public String paymentId;
    public OrderTenders withPaymentId(String paymentId) {
        this.paymentId = paymentId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("percentage")
    public Double percentage;
    public OrderTenders withPercentage(Double percentage) {
        this.percentage = percentage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_amount")
    public Long totalAmount;
    public OrderTenders withTotalAmount(Long totalAmount) {
        this.totalAmount = totalAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_discount")
    public Long totalDiscount;
    public OrderTenders withTotalDiscount(Long totalDiscount) {
        this.totalDiscount = totalDiscount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_processing_fee")
    public Long totalProcessingFee;
    public OrderTenders withTotalProcessingFee(Long totalProcessingFee) {
        this.totalProcessingFee = totalProcessingFee;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_refund")
    public Long totalRefund;
    public OrderTenders withTotalRefund(Long totalRefund) {
        this.totalRefund = totalRefund;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_service_charge")
    public Long totalServiceCharge;
    public OrderTenders withTotalServiceCharge(Long totalServiceCharge) {
        this.totalServiceCharge = totalServiceCharge;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_tax")
    public Long totalTax;
    public OrderTenders withTotalTax(Long totalTax) {
        this.totalTax = totalTax;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_tip")
    public Long totalTip;
    public OrderTenders withTotalTip(Long totalTip) {
        this.totalTip = totalTip;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transaction_id")
    public String transactionId;
    public OrderTenders withTransactionId(String transactionId) {
        this.transactionId = transactionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public OrderTendersTypeEnum type;
    public OrderTenders withType(OrderTendersTypeEnum type) {
        this.type = type;
        return this;
    }
}