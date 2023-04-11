import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class BankAccountsDeleteRequest extends SpeakeasyBase {
    /**
     * Id of Bank Account to remove.
     */
    id: number;
    /**
     * Timestamp of Bank Account to remove. Should be encoded in Base64.
     */
    timestamp: string;
}
export declare class BankAccountsDeleteResponse extends SpeakeasyBase {
    /**
     * OK
     */
    bankAccountsDelete200ApplicationJSONObject?: Record<string, any>;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
