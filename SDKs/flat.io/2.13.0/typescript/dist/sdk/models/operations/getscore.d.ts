import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetScorePathParams extends SpeakeasyBase {
    score: string;
}
export declare class GetScoreQueryParams extends SpeakeasyBase {
    sharingKey?: string;
}
export declare class GetScoreSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class GetScoreRequest extends SpeakeasyBase {
    pathParams: GetScorePathParams;
    queryParams: GetScoreQueryParams;
    security: GetScoreSecurity;
}
export declare class GetScoreResponse extends SpeakeasyBase {
    contentType: string;
    flatErrorResponse?: shared.FlatErrorResponse;
    scoreDetails?: shared.ScoreDetails;
    statusCode: number;
}
