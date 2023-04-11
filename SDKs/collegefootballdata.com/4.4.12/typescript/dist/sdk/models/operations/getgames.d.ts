import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetGamesRequest extends SpeakeasyBase {
    /**
     * Away team filter
     */
    away?: string;
    /**
     * Conference abbreviation filter
     */
    conference?: string;
    /**
     * Division classification filter (fbs/fcs/ii/iii)
     */
    division?: string;
    /**
     * Home team filter
     */
    home?: string;
    /**
     * id filter for querying a single game
     */
    id?: number;
    /**
     * Season type filter (regular or postseason)
     */
    seasonType?: string;
    /**
     * Team
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
export declare class GetGamesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * successful operation
     */
    games?: shared.Game[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
