import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Function
 */
export declare class FunctionT extends SpeakeasyBase {
    /**
     * Function ID.
     */
    dollarId: string;
    /**
     * Function permissions.
     */
    dollarPermissions: Record<string, any>;
    /**
     * Function creation date in Unix timestamp.
     */
    dateCreated: number;
    /**
     * Function update date in Unix timestamp.
     */
    dateUpdated: number;
    /**
     * Function trigger events.
     */
    events: string[];
    /**
     * Function name.
     */
    name: string;
    /**
     * Function execution runtime.
     */
    runtime: string;
    /**
     * Function execution schedult in CRON format.
     */
    schedule: string;
    /**
     * Function next scheduled execution date in Unix timestamp.
     */
    scheduleNext: number;
    /**
     * Function next scheduled execution date in Unix timestamp.
     */
    schedulePrevious: number;
    /**
     * Function status. Possible values: disabled, enabled
     */
    status: string;
    /**
     * Function active tag ID.
     */
    tag: string;
    /**
     * Function execution timeout in seconds.
     */
    timeout: number;
    /**
     * Function environment variables.
     */
    vars: string;
}
