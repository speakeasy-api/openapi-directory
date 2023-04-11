import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SalesCreditNotesPutRequest extends SpeakeasyBase {
    /**
     * Information of Sales Credit Note to update.
     */
    salesInvoiceCreditNoteDto: shared.SalesInvoiceCreditNoteDto;
    /**
     * Id of Sales Credit Note to update.
     */
    id: number;
}
export declare class SalesCreditNotesPutResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    salesCreditNotesPut200ApplicationJSONObject?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
