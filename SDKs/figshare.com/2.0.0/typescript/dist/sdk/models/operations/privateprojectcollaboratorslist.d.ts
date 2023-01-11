import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PrivateProjectCollaboratorsListPathParams extends SpeakeasyBase {
    projectId: number;
}
export declare class PrivateProjectCollaboratorsListSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class PrivateProjectCollaboratorsListRequest extends SpeakeasyBase {
    pathParams: PrivateProjectCollaboratorsListPathParams;
    security: PrivateProjectCollaboratorsListSecurity;
}
export declare class PrivateProjectCollaboratorsListResponse extends SpeakeasyBase {
    contentType: string;
    errorMessage?: shared.ErrorMessage;
    projectCollaborators?: shared.ProjectCollaborator[];
    statusCode: number;
}
