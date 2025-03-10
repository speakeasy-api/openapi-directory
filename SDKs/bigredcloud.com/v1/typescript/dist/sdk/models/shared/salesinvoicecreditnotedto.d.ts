import { SpeakeasyBase } from "../../../internal/utils";
import { AcudfValueDto } from "./acudfvaluedto";
import { ProductTranDto } from "./producttrandto";
/**
 * Information of Sales Credit Note to create.
 */
export declare class SalesInvoiceCreditNoteDto extends SpeakeasyBase {
    acCode?: string;
    bookTranTypeId?: number;
    customFields?: AcudfValueDto[];
    customerId?: number;
    deliveryTo?: string[];
    details?: string;
    entryDate?: Date;
    id?: number;
    loType?: string;
    netGoods?: number;
    netServices?: number;
    note?: string;
    ourReference?: string;
    procDate?: Date;
    productTrans?: ProductTranDto[];
    quoteId?: number;
    reference?: string;
    saleRepCode?: string;
    saleRepId?: number;
    timestamp?: string;
    total?: number;
    totalNet?: number;
    totalVAT?: number;
    unpaid?: number;
    vatTypeId?: number;
    yourReference?: string;
}
