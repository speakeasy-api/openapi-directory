import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Automation type
 */
export declare enum AutomationEntityAutomationEnum {
    CreateFolder = "create_folder",
    RequestFile = "request_file",
    RequestMove = "request_move",
    CopyNewestFile = "copy_newest_file",
    DeleteFile = "delete_file",
    CopyFile = "copy_file",
    MoveFile = "move_file",
    As2Send = "as2_send",
    RunSync = "run_sync"
}
/**
 * How this automation is triggered to run. One of: `realtime`, `daily`, `custom_schedule`, `webhook`, `email`, or `action`.
 */
export declare enum AutomationEntityTriggerEnum {
    Realtime = "realtime",
    Daily = "daily",
    CustomSchedule = "custom_schedule",
    Webhook = "webhook",
    Email = "email",
    Action = "action"
}
/**
 * List Automations
 */
export declare class AutomationEntity extends SpeakeasyBase {
    /**
     * Automation type
     */
    automation?: AutomationEntityAutomationEnum;
    /**
     * Indicates if the automation has been deleted.
     */
    deleted?: boolean;
    /**
     * Description for the this Automation.
     */
    description?: string;
    /**
     * If set, this string in the destination path will be replaced with the value in `destination_replace_to`.
     */
    destinationReplaceFrom?: string;
    /**
     * If set, this string will replace the value `destination_replace_from` in the destination filename. You can use special patterns here.
     */
    destinationReplaceTo?: string;
    /**
     * Destination Path
     */
    destinations?: string[];
    /**
     * If true, this automation will not run.
     */
    disabled?: boolean;
    /**
     * IDs of Groups for the Automation (i.e. who to Request File from)
     */
    groupIds?: number[];
    /**
     * Automation ID
     */
    id?: number;
    /**
     * If trigger is `daily`, this specifies how often to run this automation.  One of: `day`, `week`, `week_end`, `month`, `month_end`, `quarter`, `quarter_end`, `year`, `year_end`
     */
    interval?: string;
    /**
     * Time when automation was last modified. Does not change for name or description updates.
     */
    lastModifiedAt?: Date;
    /**
     * Name for this automation.
     */
    name?: string;
    /**
     * Path on which this Automation runs.  Supports globs.
     */
    path?: string;
    /**
     * If trigger is `custom_schedule`, Custom schedule description for when the automation should be run.
     */
    schedule?: Record<string, any>;
    /**
     * Source Path
     */
    source?: string;
    /**
     * IDs of remote sync folder behaviors to run by this Automation
     */
    syncIds?: number[];
    /**
     * How this automation is triggered to run. One of: `realtime`, `daily`, `custom_schedule`, `webhook`, `email`, or `action`.
     */
    trigger?: AutomationEntityTriggerEnum;
    /**
     * If trigger is `action`, this is the list of action types on which to trigger the automation. Valid actions are create, read, update, destroy, move, copy
     */
    triggerActions?: string[];
    /**
     * User ID of the Automation's creator.
     */
    userId?: number;
    /**
     * IDs of Users for the Automation (i.e. who to Request File from)
     */
    userIds?: number[];
    /**
     * A Hash of attributes specific to the automation type.
     */
    value?: Record<string, any>;
    /**
     * If trigger is `webhook`, this is the URL of the webhook to trigger the Automation.
     */
    webhookUrl?: string;
}
