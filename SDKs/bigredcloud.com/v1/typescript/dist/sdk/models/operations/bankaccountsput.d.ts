import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class BankAccountsPutRequest extends SpeakeasyBase {
    /**
     * Information of Bank Account to update.
     */
    bankAccountDto: shared.BankAccountDto;
    /**
     * Id of Bank Account to update.
     */
    id: number;
}
export declare class BankAccountsPutResponse extends SpeakeasyBase {
    /**
     * OK
     */
    bankAccountsPut200ApplicationJSONObject?: Record<string, any>;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
