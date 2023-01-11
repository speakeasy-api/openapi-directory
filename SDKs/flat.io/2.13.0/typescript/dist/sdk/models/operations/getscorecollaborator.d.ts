import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetScoreCollaboratorPathParams extends SpeakeasyBase {
    collaborator: string;
    score: string;
}
export declare class GetScoreCollaboratorQueryParams extends SpeakeasyBase {
    sharingKey?: string;
}
export declare class GetScoreCollaboratorSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class GetScoreCollaboratorRequest extends SpeakeasyBase {
    pathParams: GetScoreCollaboratorPathParams;
    queryParams: GetScoreCollaboratorQueryParams;
    security: GetScoreCollaboratorSecurity;
}
export declare class GetScoreCollaboratorResponse extends SpeakeasyBase {
    contentType: string;
    flatErrorResponse?: shared.FlatErrorResponse;
    resourceCollaborator?: shared.ResourceCollaborator;
    statusCode: number;
}
