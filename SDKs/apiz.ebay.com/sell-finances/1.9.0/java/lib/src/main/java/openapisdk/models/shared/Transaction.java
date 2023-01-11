package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Transaction
 * This type is used to express the details of one of the following monetary transactions: a buyer's payment for an order, a refund to the buyer for a returned item or cancelled order, or a credit issued by eBay to the seller's account.
**/
public class Transaction {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amount")
    public Amount amount;
    public Transaction withAmount(Amount amount) {
        this.amount = amount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bookingEntry")
    public String bookingEntry;
    public Transaction withBookingEntry(String bookingEntry) {
        this.bookingEntry = bookingEntry;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("buyer")
    public Buyer buyer;
    public Transaction withBuyer(Buyer buyer) {
        this.buyer = buyer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("feeType")
    public String feeType;
    public Transaction withFeeType(String feeType) {
        this.feeType = feeType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orderId")
    public String orderId;
    public Transaction withOrderId(String orderId) {
        this.orderId = orderId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orderLineItems")
    public OrderLineItem[] orderLineItems;
    public Transaction withOrderLineItems(OrderLineItem[] orderLineItems) {
        this.orderLineItems = orderLineItems;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentsEntity")
    public String paymentsEntity;
    public Transaction withPaymentsEntity(String paymentsEntity) {
        this.paymentsEntity = paymentsEntity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payoutId")
    public String payoutId;
    public Transaction withPayoutId(String payoutId) {
        this.payoutId = payoutId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("references")
    public Reference[] references;
    public Transaction withReferences(Reference[] references) {
        this.references = references;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("salesRecordReference")
    public String salesRecordReference;
    public Transaction withSalesRecordReference(String salesRecordReference) {
        this.salesRecordReference = salesRecordReference;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalFeeAmount")
    public Amount totalFeeAmount;
    public Transaction withTotalFeeAmount(Amount totalFeeAmount) {
        this.totalFeeAmount = totalFeeAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalFeeBasisAmount")
    public Amount totalFeeBasisAmount;
    public Transaction withTotalFeeBasisAmount(Amount totalFeeBasisAmount) {
        this.totalFeeBasisAmount = totalFeeBasisAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transactionDate")
    public String transactionDate;
    public Transaction withTransactionDate(String transactionDate) {
        this.transactionDate = transactionDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transactionId")
    public String transactionId;
    public Transaction withTransactionId(String transactionId) {
        this.transactionId = transactionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transactionMemo")
    public String transactionMemo;
    public Transaction withTransactionMemo(String transactionMemo) {
        this.transactionMemo = transactionMemo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transactionStatus")
    public String transactionStatus;
    public Transaction withTransactionStatus(String transactionStatus) {
        this.transactionStatus = transactionStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transactionType")
    public String transactionType;
    public Transaction withTransactionType(String transactionType) {
        this.transactionType = transactionType;
        return this;
    }
}