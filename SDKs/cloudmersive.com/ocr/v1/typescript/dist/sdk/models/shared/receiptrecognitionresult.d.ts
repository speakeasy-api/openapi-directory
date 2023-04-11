import { SpeakeasyBase } from "../../../internal/utils";
import { ReceiptLineItem } from "./receiptlineitem";
/**
 * Result of recognizing a receipt, to extract the key information from the receipt
 */
export declare class ReceiptRecognitionResult extends SpeakeasyBase {
    /**
     * The address of the business printed on the receipt (if included on the receipt)
     */
    addressString?: string;
    /**
     * The name of the business printed on the receipt (if included on the receipt)
     */
    businessName?: string;
    /**
     * The website URL of the business printed on the receipt (if included on the receipt)
     */
    businessWebsite?: string;
    /**
     * The phone number printed on the receipt (if included on the receipt)
     */
    phoneNumber?: string;
    /**
     * The individual line items comprising the order; does not include total (see ReceiptTotal)
     */
    receiptItems?: ReceiptLineItem[];
    /**
     * Optional; if available, the monetary value of the receipt subtotal - typically not including specialized line items such as Tax. If this value is not available, it will be 0.
     */
    receiptSubTotal?: number;
    /**
     * The total monetary value of the receipt (if included on the receipt)
     */
    receiptTotal?: number;
    /**
     * True if the operation was successful, false otherwise
     */
    successful?: boolean;
    /**
     * The date and time printed on the receipt (if included on the receipt)
     */
    timestamp?: Date;
}
