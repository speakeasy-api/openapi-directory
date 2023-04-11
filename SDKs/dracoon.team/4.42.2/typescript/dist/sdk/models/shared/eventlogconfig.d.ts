import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Eventlog settings
 */
export declare class EventlogConfig extends SpeakeasyBase {
    /**
     * Is eventlog enabled?
     */
    enabled?: boolean;
    /**
     * Determines whether user’s IP address is logged.
     */
    logIpEnabled?: boolean;
    /**
     * Retention period (in days) of event log entries.
     *
     * @remarks
     *
     * After that period, all entries are deleted.
     *
     * Recommended value: 7
     */
    retentionPeriod?: number;
}
