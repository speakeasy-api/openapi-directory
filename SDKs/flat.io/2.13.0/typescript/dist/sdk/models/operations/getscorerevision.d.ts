import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetScoreRevisionPathParams extends SpeakeasyBase {
    revision: string;
    score: string;
}
export declare class GetScoreRevisionQueryParams extends SpeakeasyBase {
    sharingKey?: string;
}
export declare class GetScoreRevisionSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class GetScoreRevisionRequest extends SpeakeasyBase {
    pathParams: GetScoreRevisionPathParams;
    queryParams: GetScoreRevisionQueryParams;
    security: GetScoreRevisionSecurity;
}
export declare class GetScoreRevisionResponse extends SpeakeasyBase {
    contentType: string;
    flatErrorResponse?: shared.FlatErrorResponse;
    scoreRevision?: shared.ScoreRevision;
    statusCode: number;
}
