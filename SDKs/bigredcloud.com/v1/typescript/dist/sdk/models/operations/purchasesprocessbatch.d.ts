import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PurchasesProcessBatchResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    purchasesProcessBatch200ApplicationJSONObject?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
