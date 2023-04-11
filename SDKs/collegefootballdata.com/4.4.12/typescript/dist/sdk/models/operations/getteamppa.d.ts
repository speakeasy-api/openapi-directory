import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetTeamPPARequest extends SpeakeasyBase {
    /**
     * Conference filter
     */
    conference?: string;
    /**
     * Filter to remove garbage time plays from calculations
     */
    excludeGarbageTime?: boolean;
    /**
     * Team filter (required if year not specified)
     */
    team?: string;
    /**
     * Year filter (required if team not specified)
     */
    year?: number;
}
export declare class GetTeamPPAResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    teamPPAS?: shared.TeamPPA[];
}
