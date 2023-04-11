import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PrivateProjectCollaboratorsInviteSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class PrivateProjectCollaboratorsInviteRequest extends SpeakeasyBase {
    /**
     * viewer or collaborator role. User user_id or email of user
     */
    projectCollaboratorInvite: shared.ProjectCollaboratorInvite;
    /**
     * Project unique identifier
     */
    projectId: number;
}
export declare class PrivateProjectCollaboratorsInviteResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Forbidden
     */
    errorMessage?: shared.ErrorMessage;
    /**
     * Created
     */
    responseMessage?: shared.ResponseMessage;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
