import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetGameWeatherRequest extends SpeakeasyBase {
    /**
     * Division classification filter (fbs/fcs/ii/iii)
     */
    classification?: string;
    /**
     * Conference filter
     */
    conference?: string;
    /**
     * Game id filter (required if no year)
     */
    gameId?: number;
    /**
     * Season type filter (regular, postseason, or both)
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
     * Year filter (required if no game id)
     */
    year?: number;
}
export declare class GetGameWeatherResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * successful operation
     */
    gameWeathers?: shared.GameWeather[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
