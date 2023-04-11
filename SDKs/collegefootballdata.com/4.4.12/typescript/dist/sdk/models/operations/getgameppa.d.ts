import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetGamePPARequest extends SpeakeasyBase {
    /**
     * Conference filter
     */
    conference?: string;
    /**
     * Filter to remove garbage time plays from calculations
     */
    excludeGarbageTime?: boolean;
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
     * Year filter
     */
    year: number;
}
export declare class GetGamePPAResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * successful operation
     */
    gamePPAS?: shared.GamePPA[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
