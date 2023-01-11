import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AddScoreCollaboratorPathParams extends SpeakeasyBase {
    score: string;
}
export declare class AddScoreCollaboratorSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class AddScoreCollaboratorRequest extends SpeakeasyBase {
    pathParams: AddScoreCollaboratorPathParams;
    request: shared.ResourceCollaboratorCreation;
    security: AddScoreCollaboratorSecurity;
}
export declare class AddScoreCollaboratorResponse extends SpeakeasyBase {
    contentType: string;
    flatErrorResponse?: shared.FlatErrorResponse;
    resourceCollaborator?: shared.ResourceCollaborator;
    statusCode: number;
}
