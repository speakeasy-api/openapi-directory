import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetAccountTypesRequest extends SpeakeasyBase {
    expand?: string;
}
/**
 * accounttypes
 */
export declare class GetAccountTypes200ApplicationJSON extends SpeakeasyBase {
    accounttypes: shared.AccountType[];
    /**
     * total number of results
     */
    total?: number;
}
export declare class GetAccountTypesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * accounttypes
     */
    getAccountTypes200ApplicationJSONObject?: GetAccountTypes200ApplicationJSON;
}
