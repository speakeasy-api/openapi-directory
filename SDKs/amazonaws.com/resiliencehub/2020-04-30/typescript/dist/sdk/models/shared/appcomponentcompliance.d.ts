import { SpeakeasyBase } from "../../../internal/utils";
import { ComplianceStatusEnum } from "./compliancestatusenum";
import { Cost } from "./cost";
import { DisruptionCompliance } from "./disruptioncompliance";
import { ResiliencyScore } from "./resiliencyscore";
/**
 * Defines the compliance of an Application Component against the resiliency policy.
 */
export declare class AppComponentCompliance extends SpeakeasyBase {
    appComponentName?: string;
    compliance?: Record<string, DisruptionCompliance>;
    cost?: Cost;
    message?: string;
    resiliencyScore?: ResiliencyScore;
    status?: ComplianceStatusEnum;
}
