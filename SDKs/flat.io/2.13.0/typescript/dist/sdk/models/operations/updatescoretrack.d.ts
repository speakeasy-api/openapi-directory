import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateScoreTrackPathParams extends SpeakeasyBase {
    score: string;
    track: string;
}
export declare class UpdateScoreTrackSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class UpdateScoreTrackRequest extends SpeakeasyBase {
    pathParams: UpdateScoreTrackPathParams;
    request: shared.ScoreTrackUpdate;
    security: UpdateScoreTrackSecurity;
}
export declare class UpdateScoreTrackResponse extends SpeakeasyBase {
    contentType: string;
    flatErrorResponse?: shared.FlatErrorResponse;
    scoreTrack?: shared.ScoreTrack;
    statusCode: number;
}
