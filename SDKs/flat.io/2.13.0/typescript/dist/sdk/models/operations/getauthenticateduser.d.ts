import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetAuthenticatedUserSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class GetAuthenticatedUserRequest extends SpeakeasyBase {
    /**
     * Only return the user id
     */
    onlyId?: boolean;
}
export declare class GetAuthenticatedUserResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Error
     */
    flatErrorResponse?: shared.FlatErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Current user details
     */
    userDetails?: shared.UserDetails;
}
