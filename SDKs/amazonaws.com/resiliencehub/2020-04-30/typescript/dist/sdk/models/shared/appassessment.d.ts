import { SpeakeasyBase } from "../../../internal/utils";
import { AssessmentInvokerEnum } from "./assessmentinvokerenum";
import { AssessmentStatusEnum } from "./assessmentstatusenum";
import { ComplianceStatusEnum } from "./compliancestatusenum";
import { Cost } from "./cost";
import { DisruptionCompliance } from "./disruptioncompliance";
import { ResiliencyPolicy } from "./resiliencypolicy";
import { ResiliencyScore } from "./resiliencyscore";
import { ResourceErrorsDetails } from "./resourceerrorsdetails";
/**
 * Defines an application assessment.
 */
export declare class AppAssessment extends SpeakeasyBase {
    appArn?: string;
    appVersion?: string;
    assessmentArn: string;
    assessmentName?: string;
    assessmentStatus: AssessmentStatusEnum;
    compliance?: Record<string, DisruptionCompliance>;
    complianceStatus?: ComplianceStatusEnum;
    cost?: Cost;
    endTime?: Date;
    invoker: AssessmentInvokerEnum;
    message?: string;
    policy?: ResiliencyPolicy;
    resiliencyScore?: ResiliencyScore;
    resourceErrorsDetails?: ResourceErrorsDetails;
    startTime?: Date;
    tags?: Record<string, string>;
}
