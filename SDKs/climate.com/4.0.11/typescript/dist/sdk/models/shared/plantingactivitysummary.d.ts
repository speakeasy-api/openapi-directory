import { SpeakeasyBase } from "../../../internal/utils";
export declare class PlantingActivitySummary extends SpeakeasyBase {
    /**
     * The time the planting activity was created. Time in ISO 8601 format with UTC timezone, 3 fractional seconds. (https://tools.ietf.org/html/rfc3339).
     */
    createdAt: Date;
    /**
     * The start time of the planting activity. Time in ISO 8601 format with UTC timezone, 3 fractional seconds (https://tools.ietf.org/html/rfc3339).
     */
    endTime: Date;
    /**
     * Array of field ids associated the planting activity.
     */
    fieldIds: string[];
    /**
     * The id of a planting activity.
     */
    id: string;
    /**
     * The size in bytes of the raw planting activity file.
     */
    length: number;
    /**
     * The start time of the planting activity. Time in ISO 8601 format with UTC timezone, 3 fractional seconds (https://tools.ietf.org/html/rfc3339).
     */
    startTime: Date;
    /**
     * The time the planting activity was last updated. Time in ISO 8601 format with UTC timezone, 3 fractional seconds. (https://tools.ietf.org/html/rfc3339).
     */
    updatedAt: Date;
}
