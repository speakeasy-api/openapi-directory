import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UntrashScoreSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class UntrashScoreRequest extends SpeakeasyBase {
    /**
     * Unique identifier of the score document. This can be a Flat Score unique identifier (i.e. `ScoreDetails.id`) or, if the score is also a Google Drive file, the Drive file unique identifier prefixed with `drive-` (e.g. `drive-0B000000000`).
     *
     * @remarks
     *
     */
    score: string;
}
export declare class UntrashScoreResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Not granted to manage this score
     */
    flatErrorResponse?: shared.FlatErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
