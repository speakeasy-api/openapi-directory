import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetTeamGameStatsRequest extends SpeakeasyBase {
    /**
     * Division classification filter (fbs/fcs/ii/iii)
     */
    classification?: string;
    /**
     * Conference abbreviation filter
     */
    conference?: string;
    /**
     * Game id filter
     */
    gameId?: number;
    /**
     * Season type filter (regular or postseason)
     */
    seasonType?: string;
    /**
     * Team filter
     */
    team?: string;
    /**
     * Week filter
     */
    week?: number;
    /**
     * Year/season filter for games
     */
    year: number;
}
export declare class GetTeamGameStatsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    teamGames?: shared.TeamGame[];
}
