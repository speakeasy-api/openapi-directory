import { SpeakeasyBase } from "../../../internal/utils";
import { ComplianceItem } from "./complianceitem";
/**
 * Success
 */
export declare class ListComplianceItemsResult extends SpeakeasyBase {
    complianceItems?: ComplianceItem[];
    nextToken?: string;
}
