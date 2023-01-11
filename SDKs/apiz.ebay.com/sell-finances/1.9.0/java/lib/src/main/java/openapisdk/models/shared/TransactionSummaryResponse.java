package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TransactionSummaryResponse
 * This type is the base response type of the getTransactionSummary method, and based on the filters that are used in the getTransactionSummary call URI, the response may include total count and amount of the seller's sales and credits, total count and amount of buyer refunds, and total count and amount of seller payment holds.
**/
public class TransactionSummaryResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("adjustmentAmount")
    public Amount adjustmentAmount;
    public TransactionSummaryResponse withAdjustmentAmount(Amount adjustmentAmount) {
        this.adjustmentAmount = adjustmentAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("adjustmentBookingEntry")
    public String adjustmentBookingEntry;
    public TransactionSummaryResponse withAdjustmentBookingEntry(String adjustmentBookingEntry) {
        this.adjustmentBookingEntry = adjustmentBookingEntry;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("adjustmentCount")
    public Integer adjustmentCount;
    public TransactionSummaryResponse withAdjustmentCount(Integer adjustmentCount) {
        this.adjustmentCount = adjustmentCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("balanceTransferAmount")
    public Amount balanceTransferAmount;
    public TransactionSummaryResponse withBalanceTransferAmount(Amount balanceTransferAmount) {
        this.balanceTransferAmount = balanceTransferAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("balanceTransferBookingEntry")
    public String balanceTransferBookingEntry;
    public TransactionSummaryResponse withBalanceTransferBookingEntry(String balanceTransferBookingEntry) {
        this.balanceTransferBookingEntry = balanceTransferBookingEntry;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("balanceTransferCount")
    public Integer balanceTransferCount;
    public TransactionSummaryResponse withBalanceTransferCount(Integer balanceTransferCount) {
        this.balanceTransferCount = balanceTransferCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creditAmount")
    public Amount creditAmount;
    public TransactionSummaryResponse withCreditAmount(Amount creditAmount) {
        this.creditAmount = creditAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creditBookingEntry")
    public String creditBookingEntry;
    public TransactionSummaryResponse withCreditBookingEntry(String creditBookingEntry) {
        this.creditBookingEntry = creditBookingEntry;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creditCount")
    public Integer creditCount;
    public TransactionSummaryResponse withCreditCount(Integer creditCount) {
        this.creditCount = creditCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disputeAmount")
    public Amount disputeAmount;
    public TransactionSummaryResponse withDisputeAmount(Amount disputeAmount) {
        this.disputeAmount = disputeAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disputeBookingEntry")
    public String disputeBookingEntry;
    public TransactionSummaryResponse withDisputeBookingEntry(String disputeBookingEntry) {
        this.disputeBookingEntry = disputeBookingEntry;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disputeCount")
    public Integer disputeCount;
    public TransactionSummaryResponse withDisputeCount(Integer disputeCount) {
        this.disputeCount = disputeCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nonSaleChargeAmount")
    public Amount nonSaleChargeAmount;
    public TransactionSummaryResponse withNonSaleChargeAmount(Amount nonSaleChargeAmount) {
        this.nonSaleChargeAmount = nonSaleChargeAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nonSaleChargeBookingEntry")
    public String nonSaleChargeBookingEntry;
    public TransactionSummaryResponse withNonSaleChargeBookingEntry(String nonSaleChargeBookingEntry) {
        this.nonSaleChargeBookingEntry = nonSaleChargeBookingEntry;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nonSaleChargeCount")
    public Integer nonSaleChargeCount;
    public TransactionSummaryResponse withNonSaleChargeCount(Integer nonSaleChargeCount) {
        this.nonSaleChargeCount = nonSaleChargeCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("onHoldAmount")
    public Amount onHoldAmount;
    public TransactionSummaryResponse withOnHoldAmount(Amount onHoldAmount) {
        this.onHoldAmount = onHoldAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("onHoldBookingEntry")
    public String onHoldBookingEntry;
    public TransactionSummaryResponse withOnHoldBookingEntry(String onHoldBookingEntry) {
        this.onHoldBookingEntry = onHoldBookingEntry;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("onHoldCount")
    public Integer onHoldCount;
    public TransactionSummaryResponse withOnHoldCount(Integer onHoldCount) {
        this.onHoldCount = onHoldCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("refundAmount")
    public Amount refundAmount;
    public TransactionSummaryResponse withRefundAmount(Amount refundAmount) {
        this.refundAmount = refundAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("refundBookingEntry")
    public String refundBookingEntry;
    public TransactionSummaryResponse withRefundBookingEntry(String refundBookingEntry) {
        this.refundBookingEntry = refundBookingEntry;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("refundCount")
    public Integer refundCount;
    public TransactionSummaryResponse withRefundCount(Integer refundCount) {
        this.refundCount = refundCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shippingLabelAmount")
    public Amount shippingLabelAmount;
    public TransactionSummaryResponse withShippingLabelAmount(Amount shippingLabelAmount) {
        this.shippingLabelAmount = shippingLabelAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shippingLabelBookingEntry")
    public String shippingLabelBookingEntry;
    public TransactionSummaryResponse withShippingLabelBookingEntry(String shippingLabelBookingEntry) {
        this.shippingLabelBookingEntry = shippingLabelBookingEntry;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shippingLabelCount")
    public Integer shippingLabelCount;
    public TransactionSummaryResponse withShippingLabelCount(Integer shippingLabelCount) {
        this.shippingLabelCount = shippingLabelCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transferAmount")
    public Amount transferAmount;
    public TransactionSummaryResponse withTransferAmount(Amount transferAmount) {
        this.transferAmount = transferAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transferBookingEntry")
    public String transferBookingEntry;
    public TransactionSummaryResponse withTransferBookingEntry(String transferBookingEntry) {
        this.transferBookingEntry = transferBookingEntry;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transferCount")
    public Integer transferCount;
    public TransactionSummaryResponse withTransferCount(Integer transferCount) {
        this.transferCount = transferCount;
        return this;
    }
}