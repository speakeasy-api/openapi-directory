import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetPlayerUsageRequest extends SpeakeasyBase {
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
     * Year filter
     */
    year: number;
}
export declare class GetPlayerUsageResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * successful operation
     */
    playerUsages?: shared.PlayerUsage[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
