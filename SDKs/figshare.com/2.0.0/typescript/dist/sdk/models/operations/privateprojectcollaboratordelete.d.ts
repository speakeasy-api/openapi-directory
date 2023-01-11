import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PrivateProjectCollaboratorDeletePathParams extends SpeakeasyBase {
    projectId: number;
    userId: number;
}
export declare class PrivateProjectCollaboratorDeleteSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class PrivateProjectCollaboratorDeleteRequest extends SpeakeasyBase {
    pathParams: PrivateProjectCollaboratorDeletePathParams;
    security: PrivateProjectCollaboratorDeleteSecurity;
}
export declare class PrivateProjectCollaboratorDeleteResponse extends SpeakeasyBase {
    contentType: string;
    errorMessage?: shared.ErrorMessage;
    statusCode: number;
}
