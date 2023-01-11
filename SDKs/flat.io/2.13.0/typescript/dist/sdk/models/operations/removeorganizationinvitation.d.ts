import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RemoveOrganizationInvitationPathParams extends SpeakeasyBase {
    invitation: string;
}
export declare class RemoveOrganizationInvitationSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class RemoveOrganizationInvitationRequest extends SpeakeasyBase {
    pathParams: RemoveOrganizationInvitationPathParams;
    security: RemoveOrganizationInvitationSecurity;
}
export declare class RemoveOrganizationInvitationResponse extends SpeakeasyBase {
    contentType: string;
    flatErrorResponse?: shared.FlatErrorResponse;
    statusCode: number;
}
