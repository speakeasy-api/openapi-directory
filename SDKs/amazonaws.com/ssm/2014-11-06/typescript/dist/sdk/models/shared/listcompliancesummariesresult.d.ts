import { SpeakeasyBase } from "../../../internal/utils";
import { ComplianceSummaryItem } from "./compliancesummaryitem";
/**
 * Success
 */
export declare class ListComplianceSummariesResult extends SpeakeasyBase {
    complianceSummaryItems?: ComplianceSummaryItem[];
    nextToken?: string;
}
