import { SpeakeasyBase } from "../../../internal/utils";
import { ReferencePredictorSummary } from "./referencepredictorsummary";
/**
 * Provides a summary of the predictor properties that are used in the <a>ListPredictors</a> operation. To get the complete set of properties, call the <a>DescribePredictor</a> operation, and provide the listed <code>PredictorArn</code>.
 */
export declare class PredictorSummary extends SpeakeasyBase {
    creationTime?: Date;
    datasetGroupArn?: string;
    isAutoPredictor?: boolean;
    lastModificationTime?: Date;
    message?: string;
    predictorArn?: string;
    predictorName?: string;
    referencePredictorSummary?: ReferencePredictorSummary;
    status?: string;
}
