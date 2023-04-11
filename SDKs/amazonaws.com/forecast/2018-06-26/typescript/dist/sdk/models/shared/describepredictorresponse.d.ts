import { SpeakeasyBase } from "../../../internal/utils";
import { AutoMLOverrideStrategyEnum } from "./automloverridestrategyenum";
import { EncryptionConfig } from "./encryptionconfig";
import { EvaluationParameters } from "./evaluationparameters";
import { FeaturizationConfig } from "./featurizationconfig";
import { HyperParameterTuningJobConfig } from "./hyperparametertuningjobconfig";
import { InputDataConfig } from "./inputdataconfig";
import { OptimizationMetricEnum } from "./optimizationmetricenum";
import { PredictorExecutionDetails } from "./predictorexecutiondetails";
/**
 * Success
 */
export declare class DescribePredictorResponse extends SpeakeasyBase {
    algorithmArn?: string;
    autoMLAlgorithmArns?: string[];
    autoMLOverrideStrategy?: AutoMLOverrideStrategyEnum;
    creationTime?: Date;
    datasetImportJobArns?: string[];
    encryptionConfig?: EncryptionConfig;
    estimatedTimeRemainingInMinutes?: number;
    evaluationParameters?: EvaluationParameters;
    featurizationConfig?: FeaturizationConfig;
    forecastHorizon?: number;
    forecastTypes?: string[];
    hpoConfig?: HyperParameterTuningJobConfig;
    inputDataConfig?: InputDataConfig;
    isAutoPredictor?: boolean;
    lastModificationTime?: Date;
    message?: string;
    optimizationMetric?: OptimizationMetricEnum;
    performAutoML?: boolean;
    performHPO?: boolean;
    predictorArn?: string;
    predictorExecutionDetails?: PredictorExecutionDetails;
    predictorName?: string;
    status?: string;
    trainingParameters?: Record<string, string>;
}
