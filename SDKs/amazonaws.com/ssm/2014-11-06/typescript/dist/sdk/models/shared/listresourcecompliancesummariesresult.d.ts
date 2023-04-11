import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceComplianceSummaryItem } from "./resourcecompliancesummaryitem";
/**
 * Success
 */
export declare class ListResourceComplianceSummariesResult extends SpeakeasyBase {
    nextToken?: string;
    resourceComplianceSummaryItems?: ResourceComplianceSummaryItem[];
}
