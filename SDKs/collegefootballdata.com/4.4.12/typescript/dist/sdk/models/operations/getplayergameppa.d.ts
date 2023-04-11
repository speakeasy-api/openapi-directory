import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetPlayerGamePPARequest extends SpeakeasyBase {
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
     * Season type filter (regular or postseason)
     */
    seasonType?: string;
    /**
     * Team filter
     */
    team?: string;
    /**
     * Minimum play threshold filter
     */
    threshold?: string;
    /**
     * Week filter
     */
    week?: number;
    /**
     * Year filter
     */
    year?: number;
}
export declare class GetPlayerGamePPAResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * successful operation
     */
    playerGamePPAS?: shared.PlayerGamePPA[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
