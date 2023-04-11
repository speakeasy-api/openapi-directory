import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SalesInvoicesPostResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    salesInvoicesPost200ApplicationJSONObject?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
