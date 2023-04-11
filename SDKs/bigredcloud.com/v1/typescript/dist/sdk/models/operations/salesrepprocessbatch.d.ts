import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SalesRepProcessBatchResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    salesRepProcessBatch200ApplicationJSONObject?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
