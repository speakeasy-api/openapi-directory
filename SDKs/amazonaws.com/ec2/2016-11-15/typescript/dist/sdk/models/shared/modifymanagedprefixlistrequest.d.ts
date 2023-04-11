import { SpeakeasyBase } from "../../../internal/utils";
import { AddPrefixListEntry } from "./addprefixlistentry";
import { RemovePrefixListEntry } from "./removeprefixlistentry";
export declare class ModifyManagedPrefixListRequest extends SpeakeasyBase {
    addEntries?: AddPrefixListEntry[];
    currentVersion?: number;
    dryRun?: boolean;
    maxEntries?: number;
    prefixListId: string;
    prefixListName?: string;
    removeEntries?: RemovePrefixListEntry[];
}
