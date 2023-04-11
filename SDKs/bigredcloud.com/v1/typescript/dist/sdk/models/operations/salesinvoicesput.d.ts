import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SalesInvoicesPutRequest extends SpeakeasyBase {
    /**
     * Information of Sales Invoice to update.
     */
    salesInvoiceCreditNoteDto: shared.SalesInvoiceCreditNoteDto;
    /**
     * Id of Sales Invoice to update.
     */
    id: number;
}
export declare class SalesInvoicesPutResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    salesInvoicesPut200ApplicationJSONObject?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
