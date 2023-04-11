import { SpeakeasyBase } from "../../../internal/utils";
import { Amount } from "./amount";
/**
 * This type contains information about a refund issued for an order. This does not include line item level refunds.
 */
export declare class OrderRefund extends SpeakeasyBase {
    /**
     * This type defines the monetary value of an amount. It can provide the amount in both the currency used on the eBay site where an item is being offered and the conversion of that value into another currency, if applicable.
     */
    amount?: Amount;
    /**
     * The date and time that the refund was issued. This timestamp is in ISO 8601 format, which uses the 24-hour Universal Coordinated Time (UTC) clock. This field is not returned until the refund has been issued. <br><br><b>Format:</b> <code>[YYYY]-[MM]-[DD]T[hh]:[mm]:[ss].[sss]Z</code> <br><b>Example:</b> <code>2015-08-04T19:09:02.768Z</code>
     */
    refundDate?: string;
    /**
     * Unique identifier of a refund that was initiated for an order through the <b>issueRefund</b> method. If the <b>issueRefund</b> method was used to issue one or more refunds at the line item level, these refund identifiers are returned at the line item level instead (<b>lineItems.refunds.refundId</b> field).<br><br> A <b>refundId</b> value is returned in the response of the <b>issueRefund</b> method, and this same value will be returned in the <b>getOrders</b> and <b>getOrders</b> responses for pending and completed refunds. For other refunds, see the <b>refundReferenceId</b> field.
     */
    refundId?: string;
    /**
     * The eBay-generated unique identifier for the refund. This field is not returned until the refund has been issued.
     */
    refundReferenceId?: string;
    /**
     * This enumeration value indicates the current status of the refund to the buyer. This container is always returned for each refund. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/sel:RefundStatusEnum'>eBay API documentation</a>
     */
    refundStatus?: string;
}
