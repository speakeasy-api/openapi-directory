import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListOrganizationInvitationsSecurity extends SpeakeasyBase {
    oAuth2: string;
}
/**
 * Filter users by role
 */
export declare enum ListOrganizationInvitationsRoleEnum {
    User = "user",
    Teacher = "teacher",
    Admin = "admin"
}
export declare class ListOrganizationInvitationsRequest extends SpeakeasyBase {
    /**
     * This is the maximum number of objects that may be returned
     */
    limit?: number;
    /**
     * An opaque string cursor to fetch the next page of data.
     *
     * @remarks
     * The paginated API URLs are returned in the `Link` header when requesting the API. These URLs will contain a `next` and `previous` cursor based on the available data.
     *
     */
    next?: string;
    /**
     * An opaque string cursor to fetch the previous page of data.
     *
     * @remarks
     * The paginated API URLs are returned in the `Link` header when requesting the API. These URLs will contain a `next` and `previous` cursor based on the available data.
     *
     */
    previous?: string;
    /**
     * Filter users by role
     */
    role?: ListOrganizationInvitationsRoleEnum;
}
export declare class ListOrganizationInvitationsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Error
     */
    flatErrorResponse?: shared.FlatErrorResponse;
    /**
     * List of invitations
     */
    organizationInvitations?: shared.OrganizationInvitation[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
