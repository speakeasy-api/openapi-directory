import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetTeamMatchupRequest extends SpeakeasyBase {
    /**
     * Maximum year
     */
    maxYear?: number;
    /**
     * Minimum year
     */
    minYear?: number;
    /**
     * First team
     */
    team1: string;
    /**
     * Second team
     */
    team2: string;
}
export declare class GetTeamMatchupResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    teamMatchup?: shared.TeamMatchup;
}
