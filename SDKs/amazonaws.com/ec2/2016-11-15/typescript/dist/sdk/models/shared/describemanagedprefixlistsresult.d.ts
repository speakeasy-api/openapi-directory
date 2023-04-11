import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The current state of the prefix list.
 */
export declare enum DescribeManagedPrefixListsResultPrefixListsStateEnum {
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
export declare class DescribeManagedPrefixListsResultPrefixListsTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * Describes a managed prefix list.
 */
export declare class DescribeManagedPrefixListsResultPrefixLists extends SpeakeasyBase {
    addressFamily?: string;
    maxEntries?: number;
    ownerId?: string;
    prefixListArn?: string;
    prefixListId?: string;
    prefixListName?: string;
    state?: DescribeManagedPrefixListsResultPrefixListsStateEnum;
    stateMessage?: string;
    tags?: DescribeManagedPrefixListsResultPrefixListsTags[];
    version?: number;
}
/**
 * Success
 */
export declare class DescribeManagedPrefixListsResult extends SpeakeasyBase {
    nextToken?: string;
    prefixLists?: DescribeManagedPrefixListsResultPrefixLists[];
}
