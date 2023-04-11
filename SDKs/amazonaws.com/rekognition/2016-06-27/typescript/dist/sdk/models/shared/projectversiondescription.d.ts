import { SpeakeasyBase } from "../../../internal/utils";
import { EvaluationResult } from "./evaluationresult";
import { GroundTruthManifest } from "./groundtruthmanifest";
import { OutputConfig } from "./outputconfig";
import { ProjectVersionStatusEnum } from "./projectversionstatusenum";
import { TestingDataResult } from "./testingdataresult";
import { TrainingDataResult } from "./trainingdataresult";
/**
 * A description of a version of an Amazon Rekognition Custom Labels model.
 */
export declare class ProjectVersionDescription extends SpeakeasyBase {
    billableTrainingTimeInSeconds?: number;
    creationTimestamp?: Date;
    evaluationResult?: EvaluationResult;
    kmsKeyId?: string;
    manifestSummary?: GroundTruthManifest;
    maxInferenceUnits?: number;
    minInferenceUnits?: number;
    outputConfig?: OutputConfig;
    projectVersionArn?: string;
    sourceProjectVersionArn?: string;
    status?: ProjectVersionStatusEnum;
    statusMessage?: string;
    testingDataResult?: TestingDataResult;
    trainingDataResult?: TrainingDataResult;
    trainingEndTimestamp?: Date;
}
