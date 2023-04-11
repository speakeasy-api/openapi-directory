import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes prefixes for Amazon Web Services services.
 */
export declare class DescribePrefixListsResultPrefixLists extends SpeakeasyBase {
    cidrs?: string[];
    prefixListId?: string;
    prefixListName?: string;
}
/**
 * Success
 */
export declare class DescribePrefixListsResult extends SpeakeasyBase {
    nextToken?: string;
    prefixLists?: DescribePrefixListsResultPrefixLists[];
}
