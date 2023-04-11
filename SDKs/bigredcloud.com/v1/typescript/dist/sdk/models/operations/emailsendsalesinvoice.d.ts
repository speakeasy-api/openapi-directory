import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class EmailSendSalesInvoiceResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    emailSendSalesInvoice200ApplicationJSONObject?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
