import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetDrivesRequest extends SpeakeasyBase {
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
     * Season type filter
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
export declare class GetDrivesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * successful operation
     */
    drives?: shared.Drive[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
