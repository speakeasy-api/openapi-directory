import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AddScoreTrackPathParams extends SpeakeasyBase {
    score: string;
}
export declare class AddScoreTrackSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class AddScoreTrackRequest extends SpeakeasyBase {
    pathParams: AddScoreTrackPathParams;
    request: shared.ScoreTrackCreation;
    security: AddScoreTrackSecurity;
}
export declare class AddScoreTrackResponse extends SpeakeasyBase {
    contentType: string;
    flatErrorResponse?: shared.FlatErrorResponse;
    scoreTrack?: shared.ScoreTrack;
    statusCode: number;
}
