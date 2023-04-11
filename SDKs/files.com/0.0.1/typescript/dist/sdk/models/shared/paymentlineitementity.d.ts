import { SpeakeasyBase } from "../../../internal/utils";
export declare class PaymentLineItemEntity extends SpeakeasyBase {
    /**
     * Payment line item amount
     */
    amount?: number;
    /**
     * Payment line item created at date/time
     */
    createdAt?: Date;
    /**
     * Invoice ID
     */
    invoiceId?: number;
    /**
     * Payment ID
     */
    paymentId?: number;
}
