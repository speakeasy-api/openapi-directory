import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteScoreSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class DeleteScoreRequest extends SpeakeasyBase {
    /**
     * If `true`, the score deletion will be scheduled to be done ASAP
     */
    now?: boolean;
    /**
     * Unique identifier of the score document. This can be a Flat Score unique identifier (i.e. `ScoreDetails.id`) or, if the score is also a Google Drive file, the Drive file unique identifier prefixed with `drive-` (e.g. `drive-0B000000000`).
     *
     * @remarks
     *
     */
    score: string;
}
export declare class DeleteScoreResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Not granted to manage this score
     */
    flatErrorResponse?: shared.FlatErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
