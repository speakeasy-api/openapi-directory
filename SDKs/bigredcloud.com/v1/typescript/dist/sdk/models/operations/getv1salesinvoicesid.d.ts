import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetV1SalesInvoicesIdRequest extends SpeakeasyBase {
    /**
     * Id of Sales Invoice to return.
     */
    id: number;
}
export declare class GetV1SalesInvoicesIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    salesInvoiceCreditNoteDto?: shared.SalesInvoiceCreditNoteDto;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
