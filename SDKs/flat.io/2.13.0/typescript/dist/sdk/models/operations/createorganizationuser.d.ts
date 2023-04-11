import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateOrganizationUserSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class CreateOrganizationUserResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Error
     */
    flatErrorResponse?: shared.FlatErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * New user created
     */
    userDetailsAdmin?: shared.UserDetailsAdmin;
}
