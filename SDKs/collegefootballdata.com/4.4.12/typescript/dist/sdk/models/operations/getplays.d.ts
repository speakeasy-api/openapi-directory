import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetPlaysRequest extends SpeakeasyBase {
    /**
     * Division classification filter (fbs/fcs/ii/iii)
     */
    classification?: string;
    /**
     * Conference filter
     */
    conference?: string;
    /**
     * Defensive team filter
     */
    defense?: string;
    /**
     * Defensive conference filter
     */
    defenseConference?: string;
    /**
     * Offensive team filter
     */
    offense?: string;
    /**
     * Offensive conference filter
     */
    offenseConference?: string;
    /**
     * Play type filter
     */
    playType?: number;
    /**
     * Season type filter
     */
    seasonType?: string;
    /**
     * Team filter
     */
    team?: string;
    /**
     * Week filter (required if team, offense, or defense, not specified)
     */
    week: number;
    /**
     * Year filter
     */
    year: number;
}
export declare class GetPlaysResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * successful operation
     */
    plays?: shared.Play[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
