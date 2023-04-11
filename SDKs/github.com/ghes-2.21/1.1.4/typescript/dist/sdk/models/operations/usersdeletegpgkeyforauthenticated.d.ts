import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UsersDeleteGpgKeyForAuthenticatedRequest extends SpeakeasyBase {
    /**
     * gpg_key_id parameter
     */
    gpgKeyId: number;
}
export declare class UsersDeleteGpgKeyForAuthenticatedResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Requires authentication
     */
    basicError?: shared.BasicError;
    /**
     * Validation failed
     */
    validationError?: shared.ValidationError;
}
