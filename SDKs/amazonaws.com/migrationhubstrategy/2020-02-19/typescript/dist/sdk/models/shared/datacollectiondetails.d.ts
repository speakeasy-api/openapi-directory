import { SpeakeasyBase } from "../../../internal/utils";
import { AssessmentStatusEnum } from "./assessmentstatusenum";
/**
 *  Detailed information about an assessment.
 */
export declare class DataCollectionDetails extends SpeakeasyBase {
    completionTime?: Date;
    failed?: number;
    inProgress?: number;
    servers?: number;
    startTime?: Date;
    status?: AssessmentStatusEnum;
    statusMessage?: string;
    success?: number;
}
