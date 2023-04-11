import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetManagedPrefixListEntriesRequest extends SpeakeasyBase {
    dryRun?: boolean;
    maxResults?: number;
    nextToken?: string;
    prefixListId: string;
    targetVersion?: number;
}
