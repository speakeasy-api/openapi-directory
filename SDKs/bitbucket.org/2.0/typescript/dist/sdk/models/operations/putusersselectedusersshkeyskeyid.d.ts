import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutUsersSelectedUserSshKeysKeyIdSecurity extends SpeakeasyBase {
    apiKey?: string;
    basic?: shared.SchemeBasic;
    oauth2?: string;
}
export declare class PutUsersSelectedUserSshKeysKeyIdRequest extends SpeakeasyBase {
    /**
     * The updated SSH key object
     */
    requestBody?: Record<string, any>;
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
export declare class PutUsersSelectedUserSshKeysKeyIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * If the submitted key or related value is invalid
     */
    error?: Record<string, any>;
    /**
     * The newly updated SSH key.
     */
    sshAccountKey?: Record<string, any>;
}
