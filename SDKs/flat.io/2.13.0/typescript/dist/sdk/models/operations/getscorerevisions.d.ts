import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetScoreRevisionsPathParams extends SpeakeasyBase {
    score: string;
}
export declare class GetScoreRevisionsQueryParams extends SpeakeasyBase {
    sharingKey?: string;
}
export declare class GetScoreRevisionsSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class GetScoreRevisionsRequest extends SpeakeasyBase {
    pathParams: GetScoreRevisionsPathParams;
    queryParams: GetScoreRevisionsQueryParams;
    security: GetScoreRevisionsSecurity;
}
export declare class GetScoreRevisionsResponse extends SpeakeasyBase {
    contentType: string;
    flatErrorResponse?: shared.FlatErrorResponse;
    scoreRevisions?: shared.ScoreRevision[];
    statusCode: number;
}
