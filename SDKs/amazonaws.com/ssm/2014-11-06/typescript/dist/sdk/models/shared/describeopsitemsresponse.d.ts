import { SpeakeasyBase } from "../../../internal/utils";
import { OpsItemSummary } from "./opsitemsummary";
/**
 * Success
 */
export declare class DescribeOpsItemsResponse extends SpeakeasyBase {
    nextToken?: string;
    opsItemSummaries?: OpsItemSummary[];
}
