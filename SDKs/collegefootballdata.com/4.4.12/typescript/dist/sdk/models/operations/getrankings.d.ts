import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetRankingsRequest extends SpeakeasyBase {
    /**
     * Season type filter (regular or postseason)
     */
    seasonType?: string;
    /**
     * Week filter
     */
    week?: number;
    /**
     * Year/season filter for games
     */
    year: number;
}
export declare class GetRankingsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * successful operation
     */
    rankingWeeks?: shared.RankingWeek[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
