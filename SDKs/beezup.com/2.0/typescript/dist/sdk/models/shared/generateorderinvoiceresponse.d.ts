import { SpeakeasyBase } from "../../../internal/utils";
export declare class GenerateOrderInvoiceResponse extends SpeakeasyBase {
    /**
     * Marketplace Account Identifier
     */
    accountId: number;
    /**
     * beezUPOrderUUID
     */
    beezUPOrderUUID: string;
    invoiceLocation?: string;
    /**
     * Invoice Sequence Number
     */
    invoiceSequenceNumber?: number;
    /**
     * Marketplace Technical Code
     */
    marketplaceTechnicalCode: string;
}
