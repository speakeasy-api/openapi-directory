import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetLinesRequest extends SpeakeasyBase {
    /**
     * Away team filter
     */
    away?: string;
    /**
     * Conference abbreviation filter
     */
    conference?: string;
    /**
     * Game id filter
     */
    gameId?: number;
    /**
     * Home team filter
     */
    home?: string;
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
    year?: number;
}
export declare class GetLinesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * successful operation
     */
    gameLines?: shared.GameLines[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
