import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes a prefix list entry.
 */
export declare class GetManagedPrefixListEntriesResultEntries extends SpeakeasyBase {
    cidr?: string;
    description?: string;
}
/**
 * Success
 */
export declare class GetManagedPrefixListEntriesResult extends SpeakeasyBase {
    entries?: GetManagedPrefixListEntriesResultEntries[];
    nextToken?: string;
}
