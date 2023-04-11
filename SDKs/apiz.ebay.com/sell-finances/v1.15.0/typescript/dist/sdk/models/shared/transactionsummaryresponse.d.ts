import { SpeakeasyBase } from "../../../internal/utils";
import { Amount } from "./amount";
/**
 * This type is the base response type of the <strong>getTransactionSummary</strong> method, and based on the filters that are used in the <strong>getTransactionSummary</strong> call URI, the response may include  total count and amount of the seller's sales and credits, total count and amount of buyer refunds, and total count and amount of seller payment holds.
 */
export declare class TransactionSummaryResponse extends SpeakeasyBase {
    /**
     * This type is used to express the dollar value and currency used for any transaction retrieved with the <strong>Finances API</strong>, including an order total, a seller payout, a buyer refund, or a seller credit.
     */
    adjustmentAmount?: Amount;
    /**
     * The credit debit sign indicator for adjustment. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/finances/types/pay:BookingEntryEnum'>eBay API documentation</a>
     */
    adjustmentBookingEntry?: string;
    /**
     * Total adjustment count for given payee within a specified period.
     */
    adjustmentCount?: number;
    /**
     * This type is used to express the dollar value and currency used for any transaction retrieved with the <strong>Finances API</strong>, including an order total, a seller payout, a buyer refund, or a seller credit.
     */
    balanceTransferAmount?: Amount;
    /**
     * The credit debit sign indicator for the balance transfer. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/finances/types/pay:BookingEntryEnum'>eBay API documentation</a>
     */
    balanceTransferBookingEntry?: string;
    /**
     * The total balance transfer count for given payee within the specified period.
     */
    balanceTransferCount?: number;
    /**
     * This type is used to express the dollar value and currency used for any transaction retrieved with the <strong>Finances API</strong>, including an order total, a seller payout, a buyer refund, or a seller credit.
     */
    creditAmount?: Amount;
    /**
     * The enumeration value indicates whether the dollar amount in the <strong>creditAmount</strong> field is a charge (debit) to the seller or a credit. Typically, the enumeration value returned here will be <code>CREDIT</code>. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/finances/types/pay:BookingEntryEnum'>eBay API documentation</a>
     */
    creditBookingEntry?: string;
    /**
     * This integer value indicates the total number of the seller's sales and/or credits that match the input criteria. <br><br><span class="tablenote"><strong>Note:</strong> Unless the <b>transactionType</b> filter is used in the request to retrieve a specific type of monetary transaction (sale, buyer refund, or seller credit), the <b>creditCount</b> and <b>creditAmount</b> fields account for both order sales and seller credits (the count and value is not distinguished between the two monetary transaction types).</span><br><br>This field is generally returned, even if <code>0</code>, but it will not be returned if a <strong>transactionType</strong> filter is used, and its value is set to either <code>REFUND</code>, <code>DISPUTE</code>, or <code>SHIPPING_LABEL</code>.
     */
    creditCount?: number;
    /**
     * This type is used to express the dollar value and currency used for any transaction retrieved with the <strong>Finances API</strong>, including an order total, a seller payout, a buyer refund, or a seller credit.
     */
    disputeAmount?: Amount;
    /**
     * The enumeration value indicates whether the dollar amount in the <strong>disputeAmount</strong> field is a charge (debit) to the seller or a credit. Typically, the enumeration value returned here will be <code>DEBIT</code>, but its possible that <code>CREDIT</code> could be returned if the seller contested one or more payment disputes and won the dispute. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/finances/types/pay:BookingEntryEnum'>eBay API documentation</a>
     */
    disputeBookingEntry?: string;
    /**
     * This integer value indicates the total number of payment disputes that have been initiated by one or more buyers. Only the orders that match the input criteria are considered. The Payment Disputes methods in the Fulfillment API can be used by the seller to retrieve more information about any payment disputes. <br><br>This field is generally returned, even if <code>0</code>, but it will not be returned if a <strong>transactionType</strong> filter is used, and its value is set to any value other than <code>DISPUTE</code>.
     */
    disputeCount?: number;
    /**
     * This type is used to express the dollar value and currency used for any transaction retrieved with the <strong>Finances API</strong>, including an order total, a seller payout, a buyer refund, or a seller credit.
     */
    loanRepaymentAmount?: Amount;
    /**
     * The enumeration value indicates whether the <code>loanRepaymentAmount</code> is a <code>DEBIT</code> against, or a <code>CREDIT</code> to, the sellers's account.<br><br>For most <code>loanRepaymentAmount</code> transactions, <code>loanRepaymentBookingEntry</code> will be <b>DEBIT</b>. However, if a loan repayment transaction is reversed, that transaction will be shown as a <b>CREDIT</b>. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/finances/types/pay:BookingEntryEnum'>eBay API documentation</a>
     */
    loanRepaymentBookingEntry?: string;
    /**
     * This integer value indicates the total number of <code>LOAN_REPAYMENT</code> transactions (i.e., <code>DEBIT</code> and <code>CREDIT</code>,) that match the input criteria.<br><br>This field is generally returned even if it equals <b>0</b>. However it will not be returned if a <code>transactionType</code> filter is used and its value has been set to any enumeration value other than <code>LOAN_REPAYMENT</code>.
     */
    loanRepaymentCount?: number;
    /**
     * This type is used to express the dollar value and currency used for any transaction retrieved with the <strong>Finances API</strong>, including an order total, a seller payout, a buyer refund, or a seller credit.
     */
    nonSaleChargeAmount?: Amount;
    /**
     * The credit/debit sign indicator for the non-sale charge. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/finances/types/pay:BookingEntryEnum'>eBay API documentation</a>
     */
    nonSaleChargeBookingEntry?: string;
    /**
     * The total non-sale charge count for given payee within a specified period.
     */
    nonSaleChargeCount?: number;
    /**
     * This type is used to express the dollar value and currency used for any transaction retrieved with the <strong>Finances API</strong>, including an order total, a seller payout, a buyer refund, or a seller credit.
     */
    onHoldAmount?: Amount;
    /**
     * The enumeration value indicates whether the dollar amount in the <strong>onHoldAmount</strong> field is a charge (debit) to the seller or a credit. Typically, the enumeration value returned here will be <code>CREDIT</code>, since on-hold funds should eventually be released as part of a payout to the seller once the hold is cleared. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/finances/types/pay:BookingEntryEnum'>eBay API documentation</a>
     */
    onHoldBookingEntry?: string;
    /**
     * This integer value indicates the total number of order sales where the associated funds are on hold. Only the orders that match the input criteria are considered.<br><br>This field is generally returned, even if <code>0</code>, but it will not be returned if a <strong>transactionStatus</strong> filter is used, and its value is set to any value other than <code>FUNDS_ON_HOLD</code>.
     */
    onHoldCount?: number;
    /**
     * This type is used to express the dollar value and currency used for any transaction retrieved with the <strong>Finances API</strong>, including an order total, a seller payout, a buyer refund, or a seller credit.
     */
    refundAmount?: Amount;
    /**
     * The enumeration value indicates whether the dollar amount in the <strong>refundAmount</strong> field is a charge (debit) to the seller or a credit. Typically, the enumeration value returned here will be <code>DEBIT</code> since this a refund from the seller to the buyer. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/finances/types/pay:BookingEntryEnum'>eBay API documentation</a>
     */
    refundBookingEntry?: string;
    /**
     * This integer value indicates the total number of buyer refunds that match the input criteria. <br><br>This field is generally returned, even if <code>0</code>, but it will not be returned if a <strong>transactionType</strong> filter is used, and its value is set to any value other than <code>REFUND</code>.
     */
    refundCount?: number;
    /**
     * This type is used to express the dollar value and currency used for any transaction retrieved with the <strong>Finances API</strong>, including an order total, a seller payout, a buyer refund, or a seller credit.
     */
    shippingLabelAmount?: Amount;
    /**
     * The enumeration value indicates whether the dollar amount in the <strong>shippingLabelAmount</strong> field is a charge (debit) to the seller or a credit. Typically, the enumeration value returned here will be <code>DEBIT</code>, as eBay will charge the seller when eBay shipping labels are purchased, but it can be <code>CREDIT</code> if the seller was refunded for a shipping label or was possibly overcharged for a shipping label. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/finances/types/pay:BookingEntryEnum'>eBay API documentation</a>
     */
    shippingLabelBookingEntry?: string;
    /**
     * This is the total number of eBay shipping labels purchased by the seller. The count returned here may depend on the specified input criteria.
     */
    shippingLabelCount?: number;
    /**
     * This type is used to express the dollar value and currency used for any transaction retrieved with the <strong>Finances API</strong>, including an order total, a seller payout, a buyer refund, or a seller credit.
     */
    transferAmount?: Amount;
    /**
     * The enumeration value indicates whether the dollar amount in the <strong>transferAmount</strong> field is a charge (debit) to the seller or a credit. Typically, the enumeration value returned here will be <code>DEBIT</code> since this a seller reimbursement to eBay for buyer refunds. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/finances/types/pay:BookingEntryEnum'>eBay API documentation</a>
     */
    transferBookingEntry?: string;
    /**
     * This integer value indicates the total number of buyer refund transfers that match the input criteria. <br><br>This field is generally returned, even if <code>0</code>, but it will not be returned if a <strong>transactionType</strong> filter is used, and its value is set to any value other than <code>TRANSFER</code>.
     */
    transferCount?: number;
    /**
     * This type is used to express the dollar value and currency used for any transaction retrieved with the <strong>Finances API</strong>, including an order total, a seller payout, a buyer refund, or a seller credit.
     */
    withdrawalAmount?: Amount;
    /**
     * The enumeration value indicates whether the dollar amount in the <strong>withdrawalAmount</strong> field is a charge (debit) to the seller or a credit. Typically, the enumeration value returned here will be <code>DEBIT</code> since this transaction involves a debit to the seller's available payout funds. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/finances/types/pay:BookingEntryEnum'>eBay API documentation</a>
     */
    withdrawalBookingEntry?: string;
    /**
     * This integer value indicates the total number of on-demand payouts (withdrawals) that match the input criteria. <br><br>This field is generally returned, even if <code>0</code>, but it will not be returned if a <strong>transactionType</strong> filter is used, and its value is set to any value other than <code>WITHDRAWAL</code>.
     */
    withdrawalCount?: number;
}
