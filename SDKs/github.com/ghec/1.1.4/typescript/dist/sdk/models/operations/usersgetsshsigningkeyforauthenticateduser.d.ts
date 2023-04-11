import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UsersGetSshSigningKeyForAuthenticatedUserRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the SSH signing key.
     */
    sshSigningKeyId: number;
}
export declare class UsersGetSshSigningKeyForAuthenticatedUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Requires authentication
     */
    basicError?: shared.BasicError;
    /**
     * Response
     */
    sshSigningKey?: shared.SshSigningKey;
}
