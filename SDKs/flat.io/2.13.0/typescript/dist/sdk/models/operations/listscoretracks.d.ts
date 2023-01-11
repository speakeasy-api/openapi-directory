import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListScoreTracksPathParams extends SpeakeasyBase {
    score: string;
}
export declare class ListScoreTracksQueryParams extends SpeakeasyBase {
    assignment?: string;
    listAutoTrack?: boolean;
    sharingKey?: string;
}
export declare class ListScoreTracksSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class ListScoreTracksRequest extends SpeakeasyBase {
    pathParams: ListScoreTracksPathParams;
    queryParams: ListScoreTracksQueryParams;
    security: ListScoreTracksSecurity;
}
export declare class ListScoreTracksResponse extends SpeakeasyBase {
    contentType: string;
    flatErrorResponse?: shared.FlatErrorResponse;
    scoreTracks?: shared.ScoreTrack[];
    statusCode: number;
}
