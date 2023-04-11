import { SpeakeasyBase } from "../../../internal/utils";
import { AppAssessmentScheduleTypeEnum } from "./appassessmentscheduletypeenum";
import { AppComplianceStatusTypeEnum } from "./appcompliancestatustypeenum";
import { AppStatusTypeEnum } from "./appstatustypeenum";
/**
 * Defines an Resilience Hub application.
 */
export declare class App extends SpeakeasyBase {
    appArn: string;
    assessmentSchedule?: AppAssessmentScheduleTypeEnum;
    complianceStatus?: AppComplianceStatusTypeEnum;
    creationTime: Date;
    description?: string;
    lastAppComplianceEvaluationTime?: Date;
    lastResiliencyScoreEvaluationTime?: Date;
    name: string;
    policyArn?: string;
    resiliencyScore?: number;
    status?: AppStatusTypeEnum;
    tags?: Record<string, string>;
}
