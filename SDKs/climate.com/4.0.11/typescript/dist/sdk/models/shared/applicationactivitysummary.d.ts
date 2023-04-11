import { SpeakeasyBase } from "../../../internal/utils";
export declare class ApplicationActivitySummary extends SpeakeasyBase {
    /**
     * The time the application activity was created. Time in ISO 8601 format with UTC timezone, 3 fractional seconds. (https://tools.ietf.org/html/rfc3339).
     */
    createdAt: Date;
    /**
     * The start time of the application activity. Time in ISO 8601 format with UTC timezone, 3 fractional seconds (https://tools.ietf.org/html/rfc3339).
     */
    endTime: Date;
    /**
     * Array of field ids associated the application activity.
     */
    fieldIds: string[];
    /**
     * The id of an application activity.
     */
    id: string;
    /**
     * The size in bytes of the raw application activity file.
     */
    length: number;
    /**
     * The start time of the application activity. Time in ISO 8601 format with UTC timezone, 3 fractional seconds (https://tools.ietf.org/html/rfc3339).
     */
    startTime: Date;
    /**
     * The time the application activity was last updated. Time in ISO 8601 format with UTC timezone, 3 fractional seconds. (https://tools.ietf.org/html/rfc3339).
     */
    updatedAt: Date;
}
