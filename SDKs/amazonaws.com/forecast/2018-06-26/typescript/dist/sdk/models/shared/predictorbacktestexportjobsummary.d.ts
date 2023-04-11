import { SpeakeasyBase } from "../../../internal/utils";
import { DataDestination } from "./datadestination";
/**
 * Provides a summary of the predictor backtest export job properties used in the <a>ListPredictorBacktestExportJobs</a> operation. To get a complete set of properties, call the <a>DescribePredictorBacktestExportJob</a> operation, and provide the listed <code>PredictorBacktestExportJobArn</code>.
 */
export declare class PredictorBacktestExportJobSummary extends SpeakeasyBase {
    creationTime?: Date;
    /**
     * The destination for an export job. Provide an S3 path, an Identity and Access Management (IAM) role that allows Amazon Forecast to access the location, and an Key Management Service (KMS) key (optional).
     */
    destination?: DataDestination;
    lastModificationTime?: Date;
    message?: string;
    predictorBacktestExportJobArn?: string;
    predictorBacktestExportJobName?: string;
    status?: string;
}
