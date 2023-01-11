import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetGroupScoresPathParams extends SpeakeasyBase {
    group: string;
}
export declare class GetGroupScoresQueryParams extends SpeakeasyBase {
    parent?: string;
}
export declare class GetGroupScoresSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class GetGroupScoresRequest extends SpeakeasyBase {
    pathParams: GetGroupScoresPathParams;
    queryParams: GetGroupScoresQueryParams;
    security: GetGroupScoresSecurity;
}
export declare class GetGroupScoresResponse extends SpeakeasyBase {
    contentType: string;
    flatErrorResponse?: shared.FlatErrorResponse;
    scoreDetails?: shared.ScoreDetails[];
    statusCode: number;
}
