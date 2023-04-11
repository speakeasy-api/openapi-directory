import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateOrganizationUserSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class UpdateOrganizationUserRequest extends SpeakeasyBase {
    userAdminUpdate: shared.UserAdminUpdate;
    /**
     * Unique identifier of the Flat account
     *
     * @remarks
     *
     */
    user: string;
}
export declare class UpdateOrganizationUserResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Error
     */
    flatErrorResponse?: shared.FlatErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * User updated
     */
    userDetailsAdmin?: shared.UserDetailsAdmin;
}
