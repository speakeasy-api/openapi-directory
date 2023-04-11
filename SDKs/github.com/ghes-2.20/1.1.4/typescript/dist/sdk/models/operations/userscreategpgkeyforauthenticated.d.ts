import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UsersCreateGpgKeyForAuthenticatedRequestBody extends SpeakeasyBase {
    /**
     * A GPG key in ASCII-armored format.
     */
    armoredPublicKey: string;
}
export declare class UsersCreateGpgKeyForAuthenticatedResponse extends SpeakeasyBase {
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
    gpgKey?: shared.GpgKey;
    /**
     * Validation failed
     */
    validationError?: shared.ValidationError;
}
