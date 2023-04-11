import { SpeakeasyBase } from "../../../internal/utils";
import { AssessmentStatusEnum } from "./assessmentstatusenum";
/**
 * Success
 */
export declare class DeleteAppAssessmentResponse extends SpeakeasyBase {
    assessmentArn: string;
    assessmentStatus: AssessmentStatusEnum;
}
