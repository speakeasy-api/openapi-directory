import { SpeakeasyBase } from "../../../internal/utils";
import { GenerateBatchOrderInvoiceErrorResponseItemDetail } from "./generatebatchorderinvoiceerrorresponseitemdetail";
export declare class GenerateBatchOrderInvoiceErrorResponseItem extends SpeakeasyBase {
    count: number;
    errorType: string;
    errors: GenerateBatchOrderInvoiceErrorResponseItemDetail[];
}
