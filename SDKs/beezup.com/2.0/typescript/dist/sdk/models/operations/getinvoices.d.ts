import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetInvoicesHeaders extends SpeakeasyBase {
    ifNoneMatch?: string;
}
export declare class GetInvoicesRequest extends SpeakeasyBase {
    headers: GetInvoicesHeaders;
}
export declare class GetInvoicesResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    invoiceList?: shared.InvoiceList;
}
