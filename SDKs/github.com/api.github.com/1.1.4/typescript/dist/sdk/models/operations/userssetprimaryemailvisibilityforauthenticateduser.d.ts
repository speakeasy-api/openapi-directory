import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Denotes whether an email is publicly visible.
 */
export declare enum UsersSetPrimaryEmailVisibilityForAuthenticatedUserRequestBodyVisibilityEnum {
    Public = "public",
    Private = "private"
}
export declare class UsersSetPrimaryEmailVisibilityForAuthenticatedUserRequestBody extends SpeakeasyBase {
    /**
     * Denotes whether an email is publicly visible.
     */
    visibility: UsersSetPrimaryEmailVisibilityForAuthenticatedUserRequestBodyVisibilityEnum;
}
export declare class UsersSetPrimaryEmailVisibilityForAuthenticatedUserResponse extends SpeakeasyBase {
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
    emails?: shared.Email[];
    /**
     * Validation failed, or the endpoint has been spammed.
     */
    validationError?: shared.ValidationError;
}
