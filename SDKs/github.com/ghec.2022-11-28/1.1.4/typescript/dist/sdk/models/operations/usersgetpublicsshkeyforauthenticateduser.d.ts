import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UsersGetPublicSshKeyForAuthenticatedUserRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the key.
     */
    keyId: number;
}
export declare class UsersGetPublicSshKeyForAuthenticatedUserResponse extends SpeakeasyBase {
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
    key?: shared.Key;
}
