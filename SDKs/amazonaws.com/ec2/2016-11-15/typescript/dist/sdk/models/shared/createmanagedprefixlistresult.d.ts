import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about the prefix list.
**/
export declare class CreateManagedPrefixListResultPrefixList extends SpeakeasyBase {
    addressFamily?: Record<string, any>;
    maxEntries?: Record<string, any>;
    ownerId?: Record<string, any>;
    prefixListArn?: Record<string, any>;
    prefixListId?: Record<string, any>;
    prefixListName?: Record<string, any>;
    state?: Record<string, any>;
    stateMessage?: Record<string, any>;
    tags?: Record<string, any>;
    version?: Record<string, any>;
}
export declare class CreateManagedPrefixListResult extends SpeakeasyBase {
    prefixList?: CreateManagedPrefixListResultPrefixList;
}
