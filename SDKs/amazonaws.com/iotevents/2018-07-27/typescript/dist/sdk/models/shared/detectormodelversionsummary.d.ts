import { SpeakeasyBase } from "../../../internal/utils";
import { DetectorModelVersionStatusEnum } from "./detectormodelversionstatusenum";
import { EvaluationMethodEnum } from "./evaluationmethodenum";
/**
 * Information about the detector model version.
 */
export declare class DetectorModelVersionSummary extends SpeakeasyBase {
    creationTime?: Date;
    detectorModelArn?: string;
    detectorModelName?: string;
    detectorModelVersion?: string;
    evaluationMethod?: EvaluationMethodEnum;
    lastUpdateTime?: Date;
    roleArn?: string;
    status?: DetectorModelVersionStatusEnum;
}
