import { SpeakeasyBase } from "../../../internal/utils";
import { Amount } from "./amount";
/**
 * This type contains refund information for a line item.
 */
export declare class LineItemRefund extends SpeakeasyBase {
    /**
     * This type defines the monetary value of an amount. It can provide the amount in both the currency used on the eBay site where an item is being offered and the conversion of that value into another currency, if applicable.
     */
    amount?: Amount;
    /**
     * The date and time that the refund was issued for the line item. This timestamp is in ISO 8601 format, which uses the 24-hour Universal Coordinated Time (UTC) clock. This field is not returned until the refund has been issued. <br><br><b>Format:</b> <code>[YYYY]-[MM]-[DD]T[hh]:[mm]:[ss].[sss]Z</code> <br><b>Example:</b> <code>2015-08-04T19:09:02.768Z</code>
     */
    refundDate?: string;
    /**
     * Unique identifier of a refund that was initiated for an order's line item through the <b>issueRefund</b> method. If the <b>issueRefund</b> method was used to issue a refund at the order level, this identifier is returned at the order level instead (<b>paymentSummary.refunds.refundId</b> field).<br><br> A <b>refundId</b> value is returned in the response of the <b>issueRefund</b> method, and this same value will be returned in the <b>getOrder</b> and <b>getOrders</b> responses for pending and completed refunds.
     */
    refundId?: string;
    /**
     * This field is reserved for internal or future use.
     */
    refundReferenceId?: string;
}
