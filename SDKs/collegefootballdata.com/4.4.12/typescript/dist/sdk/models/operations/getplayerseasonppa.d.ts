import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetPlayerSeasonPPARequest extends SpeakeasyBase {
    /**
     * Conference abbreviation filter
     */
    conference?: string;
    /**
     * Filter to remove garbage time plays from calculations
     */
    excludeGarbageTime?: boolean;
    /**
     * Player id filter
     */
    playerId?: number;
    /**
     * Position abbreviation filter
     */
    position?: string;
    /**
     * Team filter
     */
    team?: string;
    /**
     * Minimum play threshold filter
     */
    threshold?: string;
    /**
     * Year filter
     */
    year?: number;
}
export declare class GetPlayerSeasonPPAResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * successful operation
     */
    playerSeasonPPAS?: shared.PlayerSeasonPPA[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
