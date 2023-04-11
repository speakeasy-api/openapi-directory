import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UsersDeleteSshSigningKeyForAuthenticatedUserRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the SSH signing key.
     */
    sshSigningKeyId: number;
}
export declare class UsersDeleteSshSigningKeyForAuthenticatedUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Requires authentication
     */
    basicError?: shared.BasicError;
}
