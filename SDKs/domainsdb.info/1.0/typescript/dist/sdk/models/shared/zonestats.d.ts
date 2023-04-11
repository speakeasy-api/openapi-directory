import { SpeakeasyBase } from "../../../internal/utils";
import { ZoneStatistics } from "./zonestatistics";
/**
 * Success
 */
export declare class ZoneStats extends SpeakeasyBase {
    /**
     * Next page id
     */
    nextPage?: string;
    statistics?: ZoneStatistics[];
    /**
     * Time took
     */
    time: string;
    /**
     * Total days reported
     */
    total?: number;
}
