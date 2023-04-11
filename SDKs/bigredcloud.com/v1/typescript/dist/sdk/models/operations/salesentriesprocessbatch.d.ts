import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SalesEntriesProcessBatchResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    salesEntriesProcessBatch200ApplicationJSONObject?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
