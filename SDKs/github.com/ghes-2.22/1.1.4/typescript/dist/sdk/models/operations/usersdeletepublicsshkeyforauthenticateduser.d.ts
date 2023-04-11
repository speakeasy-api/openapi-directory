import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UsersDeletePublicSshKeyForAuthenticatedUserRequest extends SpeakeasyBase {
    /**
     * key_id parameter
     */
    keyId: number;
}
export declare class UsersDeletePublicSshKeyForAuthenticatedUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Requires authentication
     */
    basicError?: shared.BasicError;
}
