import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ForkScorePathParams extends SpeakeasyBase {
    score: string;
}
export declare class ForkScoreQueryParams extends SpeakeasyBase {
    sharingKey?: string;
}
export declare class ForkScoreSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class ForkScoreRequest extends SpeakeasyBase {
    pathParams: ForkScorePathParams;
    queryParams: ForkScoreQueryParams;
    request: shared.ScoreFork;
    security: ForkScoreSecurity;
}
export declare class ForkScoreResponse extends SpeakeasyBase {
    contentType: string;
    flatErrorResponse?: shared.FlatErrorResponse;
    scoreDetails?: shared.ScoreDetails;
    statusCode: number;
}
