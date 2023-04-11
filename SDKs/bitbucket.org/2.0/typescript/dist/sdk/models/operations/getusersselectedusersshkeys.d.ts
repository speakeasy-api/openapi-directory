import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetUsersSelectedUserSshKeysSecurity extends SpeakeasyBase {
    apiKey?: string;
    basic?: shared.SchemeBasic;
    oauth2?: string;
}
export declare class GetUsersSelectedUserSshKeysRequest extends SpeakeasyBase {
    /**
     * This can either be the UUID of the account, surrounded by curly-braces, for
     *
     * @remarks
     * example: `{account UUID}`, OR an Atlassian Account ID.
     *
     */
    selectedUser: string;
}
export declare class GetUsersSelectedUserSshKeysResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * If the specified user does not exist
     */
    error?: Record<string, any>;
    /**
     * A list of the SSH keys associated with the account.
     */
    paginatedSshUserKeys?: shared.PaginatedSshUserKeys;
}
