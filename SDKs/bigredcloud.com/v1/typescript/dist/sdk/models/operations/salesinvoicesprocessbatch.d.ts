import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SalesInvoicesProcessBatchResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    salesInvoicesProcessBatch200ApplicationJSONObject?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
