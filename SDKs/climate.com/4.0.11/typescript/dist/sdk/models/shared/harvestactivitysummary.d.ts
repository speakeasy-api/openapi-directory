import { SpeakeasyBase } from "../../../internal/utils";
export declare class HarvestActivitySummary extends SpeakeasyBase {
    /**
     * The time the harvest activity was created. Time in ISO 8601 format with UTC timezone, 3 fractional seconds. (https://tools.ietf.org/html/rfc3339).
     */
    createdAt: Date;
    /**
     * The start time of the harvest activity. Time in ISO 8601 format with UTC timezone, 3 fractional seconds (https://tools.ietf.org/html/rfc3339).
     */
    endTime: Date;
    /**
     * Array of field ids associated the harvest activity.
     */
    fieldIds: string[];
    /**
     * The id of a harvest activity.
     */
    id: string;
    /**
     * The size in bytes of the raw harvest activity file.
     */
    length: number;
    /**
     * The start time of the harvest activity. Time in ISO 8601 format with UTC timezone, 3 fractional seconds (https://tools.ietf.org/html/rfc3339).
     */
    startTime: Date;
    /**
     * The time the harvest activity was last updated. Time in ISO 8601 format with UTC timezone, 3 fractional seconds. (https://tools.ietf.org/html/rfc3339).
     */
    updatedAt: Date;
}
