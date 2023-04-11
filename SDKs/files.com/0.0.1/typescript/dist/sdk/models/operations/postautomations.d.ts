import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Automation type
 */
export declare enum PostAutomationsRequestBodyAutomationEnum {
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
export declare enum PostAutomationsRequestBodyTriggerEnum {
    Realtime = "realtime",
    Daily = "daily",
    CustomSchedule = "custom_schedule",
    Webhook = "webhook",
    Email = "email",
    Action = "action"
}
export declare class PostAutomationsRequestBody extends SpeakeasyBase {
    /**
     * Automation type
     */
    automation: PostAutomationsRequestBodyAutomationEnum;
    /**
     * Description for the this Automation.
     */
    description?: string;
    /**
     * DEPRECATED: Destination Path. Use `destinations` instead.
     */
    destination?: string;
    /**
     * If set, this string in the destination path will be replaced with the value in `destination_replace_to`.
     */
    destinationReplaceFrom?: string;
    /**
     * If set, this string will replace the value `destination_replace_from` in the destination filename. You can use special patterns here.
     */
    destinationReplaceTo?: string;
    /**
     * A list of String destination paths or Hash of folder_path and optional file_path.
     */
    destinations?: string[];
    /**
     * If true, this automation will not run.
     */
    disabled?: boolean;
    /**
     * A list of group IDs the automation is associated with. If sent as a string, it should be comma-delimited.
     */
    groupIds?: string;
    /**
     * How often to run this automation? One of: `day`, `week`, `week_end`, `month`, `month_end`, `quarter`, `quarter_end`, `year`, `year_end`
     */
    interval?: string;
    /**
     * Name for this automation.
     */
    name?: string;
    /**
     * Path on which this Automation runs.  Supports globs.
     */
    path?: string;
    /**
     * Custom schedule for running this automation.
     */
    schedule?: Record<string, any>;
    /**
     * Source Path
     */
    source?: string;
    /**
     * A list of sync IDs the automation is associated with. If sent as a string, it should be comma-delimited.
     */
    syncIds?: string;
    /**
     * How this automation is triggered to run. One of: `realtime`, `daily`, `custom_schedule`, `webhook`, `email`, or `action`.
     */
    trigger?: PostAutomationsRequestBodyTriggerEnum;
    /**
     * If trigger is `action`, this is the list of action types on which to trigger the automation. Valid actions are create, read, update, destroy, move, copy
     */
    triggerActions?: string[];
    /**
     * A list of user IDs the automation is associated with. If sent as a string, it should be comma-delimited.
     */
    userIds?: string;
    /**
     * A Hash of attributes specific to the automation type.
     */
    value?: Record<string, any>;
}
export declare class PostAutomationsResponse extends SpeakeasyBase {
    /**
     * The Automations object.
     */
    automationEntity?: shared.AutomationEntity;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
