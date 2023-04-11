import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetScoreboardRequest extends SpeakeasyBase {
    /**
     * Classification filter (fbs, fcs, ii, or iii). Defaults to fbs.
     */
    classification?: string;
    /**
     * Conference abbreviation filter.
     */
    conference?: string;
}
export declare class GetScoreboardResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * successful operation
     */
    scoreboardGames?: shared.ScoreboardGame[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
