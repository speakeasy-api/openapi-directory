import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetUsersSelectedUserSshKeysKeyIdSecurity extends SpeakeasyBase {
    apiKey?: string;
    basic?: shared.SchemeBasic;
    oauth2?: string;
}
export declare class GetUsersSelectedUserSshKeysKeyIdRequest extends SpeakeasyBase {
    /**
     * The SSH key's UUID value.
     */
    keyId: string;
    /**
     * This can either be the UUID of the account, surrounded by curly-braces, for
     *
     * @remarks
     * example: `{account UUID}`, OR an Atlassian Account ID.
     *
     */
    selectedUser: string;
}
export declare class GetUsersSelectedUserSshKeysKeyIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * If the specified user or key does not exist
     */
    error?: Record<string, any>;
    /**
     * The specific SSH key matching the user and UUID
     */
    sshAccountKey?: Record<string, any>;
}
