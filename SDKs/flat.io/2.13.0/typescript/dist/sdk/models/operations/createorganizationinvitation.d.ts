import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateOrganizationInvitationSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class CreateOrganizationInvitationRequest extends SpeakeasyBase {
    request?: shared.OrganizationInvitationCreation;
    security: CreateOrganizationInvitationSecurity;
}
export declare class CreateOrganizationInvitationResponse extends SpeakeasyBase {
    contentType: string;
    flatErrorResponse?: shared.FlatErrorResponse;
    organizationInvitation?: shared.OrganizationInvitation;
    statusCode: number;
}
