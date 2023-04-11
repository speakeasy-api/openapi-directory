import { SpeakeasyBase } from "../../../internal/utils";
import { DataConfig } from "./dataconfig";
import { EncryptionConfig } from "./encryptionconfig";
import { MonitorConfig } from "./monitorconfig";
import { OptimizationMetricEnum } from "./optimizationmetricenum";
import { Tag } from "./tag";
import { TimeAlignmentBoundary } from "./timealignmentboundary";
export declare class CreateAutoPredictorRequest extends SpeakeasyBase {
    dataConfig?: DataConfig;
    /**
     * An Key Management Service (KMS) key and an Identity and Access Management (IAM) role that Amazon Forecast can assume to access the key. You can specify this optional object in the <a>CreateDataset</a> and <a>CreatePredictor</a> requests.
     */
    encryptionConfig?: EncryptionConfig;
    explainPredictor?: boolean;
    forecastDimensions?: string[];
    forecastFrequency?: string;
    forecastHorizon?: number;
    forecastTypes?: string[];
    monitorConfig?: MonitorConfig;
    optimizationMetric?: OptimizationMetricEnum;
    predictorName: string;
    referencePredictorArn?: string;
    tags?: Tag[];
    timeAlignmentBoundary?: TimeAlignmentBoundary;
}
