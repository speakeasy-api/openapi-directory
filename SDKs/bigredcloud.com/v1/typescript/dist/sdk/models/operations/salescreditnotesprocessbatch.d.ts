import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SalesCreditNotesProcessBatchResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    salesCreditNotesProcessBatch200ApplicationJSONObject?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
