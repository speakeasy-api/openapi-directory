import { SpeakeasyBase } from "../../../internal/utils";
export declare class GenerateBatchOrderInvoiceRequestItem extends SpeakeasyBase {
    /**
     * Marketplace Account Identifier
     */
    accountId: number;
    /**
     * beezUPOrderUUID
     */
    beezUPOrderUUID: string;
    /**
     * Invoice Sequence Number
     */
    invoiceSequenceNumber: number;
    /**
     * Marketplace Technical Code
     */
    marketplaceTechnicalCode: string;
}
