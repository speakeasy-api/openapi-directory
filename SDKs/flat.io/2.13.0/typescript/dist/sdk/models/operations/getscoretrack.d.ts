import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetScoreTrackPathParams extends SpeakeasyBase {
    score: string;
    track: string;
}
export declare class GetScoreTrackQueryParams extends SpeakeasyBase {
    sharingKey?: string;
}
export declare class GetScoreTrackSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class GetScoreTrackRequest extends SpeakeasyBase {
    pathParams: GetScoreTrackPathParams;
    queryParams: GetScoreTrackQueryParams;
    security: GetScoreTrackSecurity;
}
export declare class GetScoreTrackResponse extends SpeakeasyBase {
    contentType: string;
    flatErrorResponse?: shared.FlatErrorResponse;
    scoreTrack?: shared.ScoreTrack;
    statusCode: number;
}
