import { SpeakeasyBase } from "../../../internal/utils";
import { DisputeAmount } from "./disputeamount";
/**
 * This type is used to provide details about one or more monetary transactions that occur as part of a payment dispute.
 */
export declare class MonetaryTransaction extends SpeakeasyBase {
    /**
     * This type defines the monetary value of an amount. It can provide the amount in both the currency used on the eBay site where an item is being offered and the conversion of that value into another currency, if applicable.
     */
    amount?: DisputeAmount;
    /**
     * This timestamp indicates when the monetary transaction occurred. A date is returned for all monetary transactions.<br><br> The following format is used: <code>YYYY-MM-DDTHH:MM:SS.SSSZ</code>. For example, <code>2015-08-04T19:09:02.768Z</code>.
     */
    date?: string;
    /**
     * This enumeration value indicates the reason for the monetary transaction. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/api:MonetaryTransactionReasonEnum'>eBay API documentation</a>
     */
    reason?: string;
    /**
     * This enumeration value indicates whether the monetary transaction is a charge or a credit to the seller. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/api:MonetaryTransactionTypeEnum'>eBay API documentation</a>
     */
    type?: string;
}
