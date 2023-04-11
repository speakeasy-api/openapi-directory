import { SpeakeasyBase } from "../../../internal/utils";
import { ConformancePackRuleCompliance } from "./conformancepackrulecompliance";
/**
 * Success
 */
export declare class DescribeConformancePackComplianceResponse extends SpeakeasyBase {
    conformancePackName: string;
    conformancePackRuleComplianceList: ConformancePackRuleCompliance[];
    nextToken?: string;
}
