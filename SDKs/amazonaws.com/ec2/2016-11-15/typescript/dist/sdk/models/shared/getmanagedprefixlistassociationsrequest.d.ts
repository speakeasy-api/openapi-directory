import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetManagedPrefixListAssociationsRequest extends SpeakeasyBase {
    dryRun?: boolean;
    maxResults?: number;
    nextToken?: string;
    prefixListId: string;
}
