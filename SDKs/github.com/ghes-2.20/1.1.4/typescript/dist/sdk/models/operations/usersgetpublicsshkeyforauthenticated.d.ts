import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UsersGetPublicSshKeyForAuthenticatedRequest extends SpeakeasyBase {
    /**
     * key_id parameter
     */
    keyId: number;
}
export declare class UsersGetPublicSshKeyForAuthenticatedResponse extends SpeakeasyBase {
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
