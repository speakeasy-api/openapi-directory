import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUserScoresPathParams extends SpeakeasyBase {
    user: string;
}
export declare class GetUserScoresQueryParams extends SpeakeasyBase {
    parent?: string;
}
export declare class GetUserScoresSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class GetUserScoresRequest extends SpeakeasyBase {
    pathParams: GetUserScoresPathParams;
    queryParams: GetUserScoresQueryParams;
    security: GetUserScoresSecurity;
}
export declare class GetUserScoresResponse extends SpeakeasyBase {
    contentType: string;
    flatErrorResponse?: shared.FlatErrorResponse;
    scoreDetails?: shared.ScoreDetails[];
    statusCode: number;
}
