import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetPlayStatsRequest extends SpeakeasyBase {
    /**
     * athleteId filter (from /roster endpoint)
     */
    athleteId?: number;
    /**
     * conference abbreviation filter
     */
    conference?: string;
    /**
     * gameId filter (from /games endpoint)
     */
    gameId?: number;
    /**
     * regular, postseason, or both
     */
    seasonType?: string;
    /**
     * statTypeId filter (from /play/stat/types endpoint)
     */
    statTypeId?: number;
    /**
     * Team filter
     */
    team?: string;
    /**
     * Week filter
     */
    week?: number;
    /**
     * Year filter
     */
    year?: number;
}
export declare class GetPlayStatsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * successful operation
     */
    playStats?: shared.PlayStat[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
