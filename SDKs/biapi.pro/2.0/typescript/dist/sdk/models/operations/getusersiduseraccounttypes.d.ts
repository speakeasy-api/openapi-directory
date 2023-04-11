import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetUsersIdUserAccountTypesRequest extends SpeakeasyBase {
    expand?: string;
    /**
     * Hint: you can use 'me' or 'all'
     */
    idUser: string;
}
/**
 * accounttypes
 */
export declare class GetUsersIdUserAccountTypes200ApplicationJSON extends SpeakeasyBase {
    accounttypes: shared.AccountType[];
    /**
     * total number of results
     */
    total?: number;
}
export declare class GetUsersIdUserAccountTypesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * accounttypes
     */
    getUsersIdUserAccountTypes200ApplicationJSONObject?: GetUsersIdUserAccountTypes200ApplicationJSON;
}
