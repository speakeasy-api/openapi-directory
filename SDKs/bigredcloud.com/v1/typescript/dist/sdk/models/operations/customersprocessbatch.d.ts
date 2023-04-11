import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CustomersProcessBatchResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    customersProcessBatch200ApplicationJSONObject?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
