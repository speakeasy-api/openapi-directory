import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ListOrganizationInvitationsRoleEnum {
    User = "user",
    Teacher = "teacher",
    Admin = "admin"
}
export declare class ListOrganizationInvitationsQueryParams extends SpeakeasyBase {
    limit?: number;
    next?: string;
    previous?: string;
    role?: ListOrganizationInvitationsRoleEnum;
}
export declare class ListOrganizationInvitationsSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class ListOrganizationInvitationsRequest extends SpeakeasyBase {
    queryParams: ListOrganizationInvitationsQueryParams;
    security: ListOrganizationInvitationsSecurity;
}
export declare class ListOrganizationInvitationsResponse extends SpeakeasyBase {
    contentType: string;
    flatErrorResponse?: shared.FlatErrorResponse;
    organizationInvitations?: shared.OrganizationInvitation[];
    statusCode: number;
}
