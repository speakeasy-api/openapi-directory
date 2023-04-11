import { SpeakeasyBase } from "../../../internal/utils";
/**
 * This type contains information about a buyer request to cancel an order.
 */
export declare class CancelRequest extends SpeakeasyBase {
    /**
     * The date and time that the order cancellation was completed, if applicable. This timestamp is in ISO 8601 format, which uses the 24-hour Universal Coordinated Time (UTC) clock. This field is not returned until the cancellation request has actually been approved by the seller.<br><br><b>Format:</b> <code>[YYYY]-[MM]-[DD]T[hh]:[mm]:[ss].[sss]Z</code> <br><b>Example:</b> <code>2015-08-04T19:09:02.768Z</code>
     */
    cancelCompletedDate?: string;
    /**
     * This string value indicates the party who made the initial cancellation request. Typically, either the 'Buyer' or 'Seller'. If a cancellation request has been made, this field should be returned.
     */
    cancelInitiator?: string;
    /**
     * The reason why the <b>cancelInitiator</b> initiated the cancellation request. Cancellation reasons for a buyer might include 'order placed by mistake' or 'order won't arrive in time'. For a seller, a typical cancellation reason is 'out of stock'. If a cancellation request has been made, this field should be returned.
     */
    cancelReason?: string;
    /**
     * The unique identifier of the order cancellation request. This field is returned for each cancellation request.
     */
    cancelRequestId?: string;
    /**
     * The current stage or condition of the cancellation request. This field is returned for each cancellation request. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/sel:CancelRequestStateEnum'>eBay API documentation</a>
     */
    cancelRequestState?: string;
    /**
     * The date and time that the order cancellation was requested. This timestamp is in ISO 8601 format, which uses the 24-hour Universal Coordinated Time (UTC) clock. This field is returned for each cancellation request.<br><br><b>Format:</b> <code>[YYYY]-[MM]-[DD]T[hh]:[mm]:[ss].[sss]Z</code> <br><b>Example:</b> <code>2015-08-04T19:09:02.768Z</code>
     */
    cancelRequestedDate?: string;
}
