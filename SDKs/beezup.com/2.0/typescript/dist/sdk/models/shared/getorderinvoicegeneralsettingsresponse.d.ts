import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Order Invoice General Settings
 */
export declare class GetOrderInvoiceGeneralSettingsResponse extends SpeakeasyBase {
    /**
     * If the error is translated, the culture name will be indicated
     */
    cultureName: string;
    /**
     * Invoice Prefix. Can contain 1 to 50 characters, with alphanumeric characters in lowercase uppercase and #, _, -
     */
    invoicePrefix: string;
    /**
     * Invoice Sequence Number
     */
    invoiceStartingSequenceNumber: number;
    /**
     * Invoice Sequence Number
     */
    lastInvoiceSequenceNumber?: number;
    /**
     * Product VAT in percent
     */
    productVATPercent: number;
    /**
     * Shipping cost VAT in percent
     */
    shippingVATPercent: number;
}
