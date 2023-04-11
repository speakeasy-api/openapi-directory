import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UsersCreatePublicSshKeyForAuthenticatedRequestBody extends SpeakeasyBase {
    /**
     * The public SSH key to add to your GitHub account.
     */
    key: string;
    /**
     * A descriptive name for the new key.
     */
    title?: string;
}
export declare class UsersCreatePublicSshKeyForAuthenticatedResponse extends SpeakeasyBase {
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
    /**
     * Validation failed
     */
    validationError?: shared.ValidationError;
}
