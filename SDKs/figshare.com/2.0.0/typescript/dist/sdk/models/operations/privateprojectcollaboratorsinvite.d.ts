import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PrivateProjectCollaboratorsInvitePathParams extends SpeakeasyBase {
    projectId: number;
}
export declare class PrivateProjectCollaboratorsInviteSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class PrivateProjectCollaboratorsInviteRequest extends SpeakeasyBase {
    pathParams: PrivateProjectCollaboratorsInvitePathParams;
    request: shared.ProjectCollaboratorInvite;
    security: PrivateProjectCollaboratorsInviteSecurity;
}
export declare class PrivateProjectCollaboratorsInviteResponse extends SpeakeasyBase {
    contentType: string;
    errorMessage?: shared.ErrorMessage;
    responseMessage?: shared.ResponseMessage;
    statusCode: number;
}
