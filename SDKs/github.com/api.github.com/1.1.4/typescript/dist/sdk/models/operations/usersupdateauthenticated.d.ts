import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UsersUpdateAuthenticatedRequestBody extends SpeakeasyBase {
    /**
     * The new short biography of the user.
     */
    bio?: string;
    /**
     * The new blog URL of the user.
     */
    blog?: string;
    /**
     * The new company of the user.
     */
    company?: string;
    /**
     * The publicly visible email address of the user.
     */
    email?: string;
    /**
     * The new hiring availability of the user.
     */
    hireable?: boolean;
    /**
     * The new location of the user.
     */
    location?: string;
    /**
     * The new name of the user.
     */
    name?: string;
    /**
     * The new Twitter username of the user.
     */
    twitterUsername?: string;
}
export declare class UsersUpdateAuthenticatedResponse extends SpeakeasyBase {
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
    privateUser?: shared.PrivateUser;
    /**
     * Validation failed, or the endpoint has been spammed.
     */
    validationError?: shared.ValidationError;
}
