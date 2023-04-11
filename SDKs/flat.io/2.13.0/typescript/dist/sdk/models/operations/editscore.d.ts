import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class EditScoreSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class EditScoreRequest extends SpeakeasyBase {
    scoreModification?: shared.ScoreModification;
    /**
     * Unique identifier of the score document. This can be a Flat Score unique identifier (i.e. `ScoreDetails.id`) or, if the score is also a Google Drive file, the Drive file unique identifier prefixed with `drive-` (e.g. `drive-0B000000000`).
     *
     * @remarks
     *
     */
    score: string;
}
export declare class EditScoreResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Account overquota
     */
    flatErrorResponse?: shared.FlatErrorResponse;
    /**
     * Score details
     */
    scoreDetails?: shared.ScoreDetails;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
