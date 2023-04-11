import { SpeakeasyBase } from "../../../internal/utils";
import { Amount } from "./amount";
/**
 * This type is used by the <b>charge</b> container, which is an array of one or more charges related to the transfer.
 */
export declare class Charge extends SpeakeasyBase {
    /**
     * The unique identifier of an order cancellation. This field is only applicable and returned if the charge is related to an order  cancellation.
     */
    cancellationId?: string;
    /**
     * The unique identifier of a case filed against an order. This field is only applicable and returned if the charge is related to a case filed against an order.
     */
    caseId?: string;
    /**
     * This type is used to express the dollar value and currency used for any transaction retrieved with the <strong>Finances API</strong>, including an order total, a seller payout, a buyer refund, or a seller credit.
     */
    chargeNetAmount?: Amount;
    /**
     * The unique identifier of an Item Not Received (INR) inquiry filed against an order. This field is only applicable and returned if the charge is related to has an INR inquiry filed against the order.
     */
    inquiryId?: string;
    /**
     * The unique identifier of the order that is associated with the charge.
     */
    orderId?: string;
    /**
     * The unique identifier of a third-party payment dispute filed against an order. This occurs when the buyer files a dispute against the order with their payment provider, and then the dispute comes into eBay's system. This field is only applicable and returned if the charge is related to a third-party payment dispute filed against an order.
     */
    paymentDisputeId?: string;
    /**
     * The unique identifier of a buyer refund associated with the charge.
     */
    refundId?: string;
    /**
     * The unique identifier of an order return. This field is only applicable and returned if the charge is related to an order that was returned by the buyer.
     */
    returnId?: string;
}
