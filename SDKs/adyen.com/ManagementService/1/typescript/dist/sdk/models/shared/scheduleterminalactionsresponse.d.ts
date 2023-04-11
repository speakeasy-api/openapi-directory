import { SpeakeasyBase } from "../../../internal/utils";
import { TerminalActionScheduleDetail } from "./terminalactionscheduledetail";
/**
 * OK - the request has succeeded.
 */
export declare class ScheduleTerminalActionsResponse extends SpeakeasyBase {
    /**
     * Information about the action to take.
     */
    actionDetails?: any;
    /**
     * A list containing a terminal ID and an action ID for each terminal that the action was scheduled for.
     */
    items?: TerminalActionScheduleDetail[];
    /**
     * The date and time when the action should happen.
     *
     * @remarks
     * Format: [RFC 3339](https://www.rfc-editor.org/rfc/rfc3339), but without the **Z** before the time offset. For example, **2021-11-15T12:16:21+01:00**
     * The action is sent with the first [maintenance call](https://docs.adyen.com/point-of-sale/automating-terminal-management/terminal-actions-api#when-actions-take-effect) after the specified date and time in the time zone of the terminal.
     * An empty value causes the action to be sent as soon as possible: at the next maintenance call.
     */
    scheduledAt?: string;
    /**
     * The unique ID of the [store](https://docs.adyen.com/api-explorer/#/ManagementService/latest/get/stores). If present, all terminals in the `terminalIds` list must be assigned to this store.
     */
    storeId?: string;
    /**
     * A list of unique IDs of the terminals that the action applies to.
     */
    terminalIds?: string[];
    /**
     * The validation errors that occurred in the list of terminals, and for each error the IDs of the terminals that the error applies to.
     */
    terminalsWithErrors?: Record<string, string[]>;
    /**
     * The number of terminals for which scheduling the action failed.
     */
    totalErrors?: number;
    /**
     * The number of terminals for which the action was successfully scheduled. This doesn't mean the action has happened yet.
     */
    totalScheduled?: number;
}
