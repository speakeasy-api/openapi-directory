import { SpeakeasyBase } from "../../../internal/utils";
import { AppAssessmentScheduleTypeEnum } from "./appassessmentscheduletypeenum";
import { AppComplianceStatusTypeEnum } from "./appcompliancestatustypeenum";
import { AppStatusTypeEnum } from "./appstatustypeenum";
/**
 * Defines an application summary.
 */
export declare class AppSummary extends SpeakeasyBase {
    appArn: string;
    assessmentSchedule?: AppAssessmentScheduleTypeEnum;
    complianceStatus?: AppComplianceStatusTypeEnum;
    creationTime: Date;
    description?: string;
    name: string;
    resiliencyScore?: number;
    status?: AppStatusTypeEnum;
}
