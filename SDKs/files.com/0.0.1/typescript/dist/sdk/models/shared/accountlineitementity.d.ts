import { SpeakeasyBase } from "../../../internal/utils";
import { InvoiceLineItemEntity } from "./invoicelineitementity";
import { PaymentLineItemEntity } from "./paymentlineitementity";
/**
 * List Payments
 */
export declare class AccountLineItemEntity extends SpeakeasyBase {
    /**
     * Line item amount
     */
    amount?: number;
    /**
     * Line item balance
     */
    balance?: number;
    /**
     * Line item created at
     */
    createdAt?: Date;
    /**
     * Line item currency
     */
    currency?: string;
    /**
     * Line item download uri
     */
    downloadUri?: string;
    /**
     * Line item Id
     */
    id?: number;
    /**
     * Associated invoice line items
     */
    invoiceLineItems?: InvoiceLineItemEntity[];
    /**
     * Line item payment method
     */
    method?: string;
    /**
     * Associated payment line items
     */
    paymentLineItems?: PaymentLineItemEntity[];
    /**
     * Date/time payment was reversed if applicable
     */
    paymentReversedAt?: Date;
    /**
     * Type of payment if applicable
     */
    paymentType?: string;
    /**
     * Site name this line item is for
     */
    siteName?: string;
    /**
     * Type of line item, either payment or invoice
     */
    type?: string;
    /**
     * Line item updated at
     */
    updatedAt?: Date;
}
