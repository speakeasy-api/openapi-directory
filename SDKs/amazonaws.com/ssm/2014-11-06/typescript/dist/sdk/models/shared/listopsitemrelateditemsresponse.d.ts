import { SpeakeasyBase } from "../../../internal/utils";
import { OpsItemRelatedItemSummary } from "./opsitemrelateditemsummary";
/**
 * Success
 */
export declare class ListOpsItemRelatedItemsResponse extends SpeakeasyBase {
    nextToken?: string;
    summaries?: OpsItemRelatedItemSummary[];
}
