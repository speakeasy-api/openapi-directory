import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Order Invoice General Settings
**/
export declare class GetOrderInvoiceGeneralSettingsResponse extends SpeakeasyBase {
    cultureName: string;
    invoicePrefix: string;
    invoiceStartingSequenceNumber: number;
    lastInvoiceSequenceNumber?: number;
    productVATPercent: number;
    shippingVATPercent: number;
}
