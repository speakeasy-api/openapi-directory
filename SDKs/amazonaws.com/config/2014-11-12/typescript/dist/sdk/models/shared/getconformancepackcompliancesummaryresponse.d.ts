import { SpeakeasyBase } from "../../../internal/utils";
import { ConformancePackComplianceSummary } from "./conformancepackcompliancesummary";
/**
 * Success
 */
export declare class GetConformancePackComplianceSummaryResponse extends SpeakeasyBase {
    conformancePackComplianceSummaryList?: ConformancePackComplianceSummary[];
    nextToken?: string;
}
