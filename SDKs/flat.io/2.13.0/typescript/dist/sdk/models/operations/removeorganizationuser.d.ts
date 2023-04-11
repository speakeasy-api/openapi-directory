import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RemoveOrganizationUserSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class RemoveOrganizationUserRequest extends SpeakeasyBase {
    /**
     * If `true`, the account will be only removed from the organization and converted into an individual account on our public website, https://flat.io.
     *
     * @remarks
     * This operation will remove the education-related data from the account.
     * Before realizing this operation, you need to be sure that the user is at least 13 years old and that this one has read and agreed to the Individual Terms of Services of Flat available on https://flat.io/legal.
     *
     */
    convertToIndividual?: boolean;
    /**
     * Unique identifier of the Flat account
     *
     * @remarks
     *
     */
    user: string;
}
export declare class RemoveOrganizationUserResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Error
     */
    flatErrorResponse?: shared.FlatErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
