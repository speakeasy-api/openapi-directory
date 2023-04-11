import { SpeakeasyBase } from "../../../internal/utils";
import { DetectorModelVersionStatusEnum } from "./detectormodelversionstatusenum";
import { EvaluationMethodEnum } from "./evaluationmethodenum";
/**
 * Information about how the detector model is configured.
 */
export declare class DetectorModelConfiguration extends SpeakeasyBase {
    creationTime?: Date;
    detectorModelArn?: string;
    detectorModelDescription?: string;
    detectorModelName?: string;
    detectorModelVersion?: string;
    evaluationMethod?: EvaluationMethodEnum;
    key?: string;
    lastUpdateTime?: Date;
    roleArn?: string;
    status?: DetectorModelVersionStatusEnum;
}
