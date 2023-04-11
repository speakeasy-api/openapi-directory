import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetUserSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class GetUserRequest extends SpeakeasyBase {
    /**
     * This route parameter is the unique identifier of the user. You can specify an email instead of an unique identifier. If you are executing this request authenticated, you can use `me` as a value instead of the current User unique identifier to work on the current authenticated user.
     *
     * @remarks
     *
     */
    user: string;
}
export declare class GetUserResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Error
     */
    flatErrorResponse?: shared.FlatErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The user public details
     */
    userPublic?: shared.UserPublic;
}
