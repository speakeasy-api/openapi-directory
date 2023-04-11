import { SpeakeasyBase } from "../../../internal/utils";
import { DataConfig } from "./dataconfig";
import { EncryptionConfig } from "./encryptionconfig";
import { ExplainabilityInfo } from "./explainabilityinfo";
import { MonitorInfo } from "./monitorinfo";
import { OptimizationMetricEnum } from "./optimizationmetricenum";
import { ReferencePredictorSummary } from "./referencepredictorsummary";
import { TimeAlignmentBoundary } from "./timealignmentboundary";
/**
 * Success
 */
export declare class DescribeAutoPredictorResponse extends SpeakeasyBase {
    creationTime?: Date;
    dataConfig?: DataConfig;
    datasetImportJobArns?: string[];
    /**
     * An Key Management Service (KMS) key and an Identity and Access Management (IAM) role that Amazon Forecast can assume to access the key. You can specify this optional object in the <a>CreateDataset</a> and <a>CreatePredictor</a> requests.
     */
    encryptionConfig?: EncryptionConfig;
    estimatedTimeRemainingInMinutes?: number;
    explainabilityInfo?: ExplainabilityInfo;
    forecastDimensions?: string[];
    forecastFrequency?: string;
    forecastHorizon?: number;
    forecastTypes?: string[];
    lastModificationTime?: Date;
    message?: string;
    monitorInfo?: MonitorInfo;
    optimizationMetric?: OptimizationMetricEnum;
    predictorArn?: string;
    predictorName?: string;
    referencePredictorSummary?: ReferencePredictorSummary;
    status?: string;
    timeAlignmentBoundary?: TimeAlignmentBoundary;
}
