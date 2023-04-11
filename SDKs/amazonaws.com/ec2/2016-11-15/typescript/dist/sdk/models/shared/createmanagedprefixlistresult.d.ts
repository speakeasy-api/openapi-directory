import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The current state of the prefix list.
 */
export declare enum CreateManagedPrefixListResultPrefixListStateEnum {
    CreateInProgress = "create-in-progress",
    CreateComplete = "create-complete",
    CreateFailed = "create-failed",
    ModifyInProgress = "modify-in-progress",
    ModifyComplete = "modify-complete",
    ModifyFailed = "modify-failed",
    RestoreInProgress = "restore-in-progress",
    RestoreComplete = "restore-complete",
    RestoreFailed = "restore-failed",
    DeleteInProgress = "delete-in-progress",
    DeleteComplete = "delete-complete",
    DeleteFailed = "delete-failed"
}
/**
 * Describes a tag.
 */
export declare class CreateManagedPrefixListResultPrefixListTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * Information about the prefix list.
 */
export declare class CreateManagedPrefixListResultPrefixList extends SpeakeasyBase {
    addressFamily?: string;
    maxEntries?: number;
    ownerId?: string;
    prefixListArn?: string;
    prefixListId?: string;
    prefixListName?: string;
    state?: CreateManagedPrefixListResultPrefixListStateEnum;
    stateMessage?: string;
    tags?: CreateManagedPrefixListResultPrefixListTags[];
    version?: number;
}
/**
 * Success
 */
export declare class CreateManagedPrefixListResult extends SpeakeasyBase {
    prefixList?: CreateManagedPrefixListResultPrefixList;
}
