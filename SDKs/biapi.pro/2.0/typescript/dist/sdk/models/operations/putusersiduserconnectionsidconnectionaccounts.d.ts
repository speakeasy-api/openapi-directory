import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutUsersIdUserConnectionsIdConnectionAccountsRequest extends SpeakeasyBase {
    expand?: string;
    idConnection: number;
    /**
     * Hint: you can use 'me' or 'all'
     */
    idUser: string;
}
export declare class PutUsersIdUserConnectionsIdConnectionAccountsResponse extends SpeakeasyBase {
    /**
     * Successful PUT on Account resource
     */
    account?: shared.Account;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
