import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class BankAccountsProcessBatchResponse extends SpeakeasyBase {
    /**
     * OK
     */
    bankAccountsProcessBatch200ApplicationJSONObject?: Record<string, any>;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
