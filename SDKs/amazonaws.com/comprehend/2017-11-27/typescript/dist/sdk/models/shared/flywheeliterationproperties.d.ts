import { SpeakeasyBase } from "../../../internal/utils";
import { FlywheelIterationStatusEnum } from "./flywheeliterationstatusenum";
import { FlywheelModelEvaluationMetrics } from "./flywheelmodelevaluationmetrics";
/**
 * The configuration properties of a flywheel iteration.
 */
export declare class FlywheelIterationProperties extends SpeakeasyBase {
    creationTime?: Date;
    endTime?: Date;
    evaluatedModelArn?: string;
    /**
     * The evaluation metrics associated with the evaluated model.
     */
    evaluatedModelMetrics?: FlywheelModelEvaluationMetrics;
    evaluationManifestS3Prefix?: string;
    flywheelArn?: string;
    flywheelIterationId?: string;
    message?: string;
    status?: FlywheelIterationStatusEnum;
    trainedModelArn?: string;
    trainedModelMetrics?: FlywheelModelEvaluationMetrics;
}
