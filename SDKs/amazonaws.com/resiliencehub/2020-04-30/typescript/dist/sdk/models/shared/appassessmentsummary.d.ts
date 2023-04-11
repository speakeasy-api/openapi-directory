import { SpeakeasyBase } from "../../../internal/utils";
import { AssessmentInvokerEnum } from "./assessmentinvokerenum";
import { AssessmentStatusEnum } from "./assessmentstatusenum";
import { ComplianceStatusEnum } from "./compliancestatusenum";
import { Cost } from "./cost";
/**
 * Defines an application assessment summary.
 */
export declare class AppAssessmentSummary extends SpeakeasyBase {
    appArn?: string;
    appVersion?: string;
    assessmentArn: string;
    assessmentName?: string;
    assessmentStatus: AssessmentStatusEnum;
    complianceStatus?: ComplianceStatusEnum;
    cost?: Cost;
    endTime?: Date;
    invoker?: AssessmentInvokerEnum;
    message?: string;
    resiliencyScore?: number;
    startTime?: Date;
}
