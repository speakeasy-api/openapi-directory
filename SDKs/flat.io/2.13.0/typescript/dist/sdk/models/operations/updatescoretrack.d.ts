import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateScoreTrackSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class UpdateScoreTrackRequest extends SpeakeasyBase {
    scoreTrackUpdate: shared.ScoreTrackUpdate;
    /**
     * Unique identifier of the score document. This can be a Flat Score unique identifier (i.e. `ScoreDetails.id`) or, if the score is also a Google Drive file, the Drive file unique identifier prefixed with `drive-` (e.g. `drive-0B000000000`).
     *
     * @remarks
     *
     */
    score: string;
    /**
     * Unique identifier of a score audio track
     *
     * @remarks
     *
     */
    track: string;
}
export declare class UpdateScoreTrackResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Not granted to access to this score
     */
    flatErrorResponse?: shared.FlatErrorResponse;
    /**
     * Updated track
     */
    scoreTrack?: shared.ScoreTrack;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
