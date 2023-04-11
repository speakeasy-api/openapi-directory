import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteUsersIdUserConnectionsIdConnectionAccountsRequest extends SpeakeasyBase {
    expand?: string;
    idConnection: number;
    /**
     * Hint: you can use 'me' or 'all'
     */
    idUser: string;
}
export declare class DeleteUsersIdUserConnectionsIdConnectionAccountsResponse extends SpeakeasyBase {
    /**
     * Successful DELETE on Account resource
     */
    account?: shared.Account;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
