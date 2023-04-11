import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GETModifyUserActionEnum {
    ModifyUser = "ModifyUser"
}
/**
 * Specifies the authentication mode to use.
 */
export declare class GETModifyUserAuthenticationMode extends SpeakeasyBase {
    passwords?: string[];
    type?: shared.InputAuthenticationTypeEnum;
}
export declare enum GETModifyUserVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}
export declare class GETModifyUserRequest extends SpeakeasyBase {
    /**
     * Access permissions string used for this user.
     */
    accessString?: string;
    action: GETModifyUserActionEnum;
    /**
     * Adds additional user permissions to the access string.
     */
    appendAccessString?: string;
    /**
     * Specifies how to authenticate the user.
     */
    authenticationMode?: GETModifyUserAuthenticationMode;
    /**
     * Indicates no password is required for the user.
     */
    noPasswordRequired?: boolean;
    /**
     * The passwords belonging to the user. You are allowed up to two.
     */
    passwords?: string[];
    /**
     * The ID of the user.
     */
    userId: string;
    version: GETModifyUserVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETModifyUserResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
