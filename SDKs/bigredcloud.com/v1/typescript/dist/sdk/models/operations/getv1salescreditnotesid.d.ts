import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetV1SalesCreditNotesIdRequest extends SpeakeasyBase {
    /**
     * Id of Sales Credit Note to return.
     */
    id: number;
}
export declare class GetV1SalesCreditNotesIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    salesInvoiceCreditNoteDto?: shared.SalesInvoiceCreditNoteDto;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
