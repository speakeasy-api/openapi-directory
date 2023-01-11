import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RemoveScoreCollaboratorPathParams extends SpeakeasyBase {
    collaborator: string;
    score: string;
}
export declare class RemoveScoreCollaboratorSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class RemoveScoreCollaboratorRequest extends SpeakeasyBase {
    pathParams: RemoveScoreCollaboratorPathParams;
    security: RemoveScoreCollaboratorSecurity;
}
export declare class RemoveScoreCollaboratorResponse extends SpeakeasyBase {
    contentType: string;
    flatErrorResponse?: shared.FlatErrorResponse;
    statusCode: number;
}
