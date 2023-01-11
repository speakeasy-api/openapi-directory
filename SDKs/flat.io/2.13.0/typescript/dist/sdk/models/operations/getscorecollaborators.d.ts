import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetScoreCollaboratorsPathParams extends SpeakeasyBase {
    score: string;
}
export declare class GetScoreCollaboratorsQueryParams extends SpeakeasyBase {
    sharingKey?: string;
}
export declare class GetScoreCollaboratorsSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class GetScoreCollaboratorsRequest extends SpeakeasyBase {
    pathParams: GetScoreCollaboratorsPathParams;
    queryParams: GetScoreCollaboratorsQueryParams;
    security: GetScoreCollaboratorsSecurity;
}
export declare class GetScoreCollaboratorsResponse extends SpeakeasyBase {
    contentType: string;
    flatErrorResponse?: shared.FlatErrorResponse;
    resourceCollaborators?: shared.ResourceCollaborator[];
    statusCode: number;
}
