import { SpeakeasyBase } from "../../../internal/utils";
import { SalesInvoiceCreditNoteDto } from "./salesinvoicecreditnotedto";
/**
 * Id of Quote to generate
 */
export declare class QuoteGeneratingInvoiceDto extends SpeakeasyBase {
    quoteId?: number;
    saleInvoice?: SalesInvoiceCreditNoteDto;
}
