import { SpeakeasyBase } from "../../../internal/utils";
export declare class ScoutingObservationSummary extends SpeakeasyBase {
    /**
     * The start time of the scouting observation. Time in ISO 8601 format with UTC timezone, 3 fractional seconds (https://tools.ietf.org/html/rfc3339).
     */
    endTime: Date;
    /**
     * The id of a scouting observation.
     */
    id: string;
    /**
     * The start time of the scouting observation. Time in ISO 8601 format with UTC timezone, 3 fractional seconds (https://tools.ietf.org/html/rfc3339).
     */
    startTime: Date;
    /**
     * The time the scouting observation or any of its attachments was last updated.Time in ISO 8601 format with UTC timezone, 3 fractional seconds. (https://tools.ietf.org/html/rfc3339).
     */
    updatedAt: Date;
}
