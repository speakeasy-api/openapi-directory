import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CashReceiptsProcessBatchResponse extends SpeakeasyBase {
    /**
     * OK
     */
    cashReceiptsProcessBatch200ApplicationJSONObject?: Record<string, any>;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
