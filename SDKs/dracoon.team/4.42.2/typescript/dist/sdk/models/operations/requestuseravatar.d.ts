import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RequestUserAvatarRequest extends SpeakeasyBase {
    /**
     * User ID
     */
    userId: number;
    /**
     * UUID of the avatar
     */
    uuid: string;
}
export declare class RequestUserAvatarResponse extends SpeakeasyBase {
    /**
     * OK
     */
    avatar?: shared.Avatar;
    contentType: string;
    /**
     * Bad Request
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
