import { SpeakeasyBase } from "../../../internal/utils";
import { DataDestination } from "./datadestination";
import { Tag } from "./tag";
export declare class CreatePredictorBacktestExportJobRequest extends SpeakeasyBase {
    /**
     * The destination for an export job. Provide an S3 path, an Identity and Access Management (IAM) role that allows Amazon Forecast to access the location, and an Key Management Service (KMS) key (optional).
     */
    destination: DataDestination;
    format?: string;
    predictorArn: string;
    predictorBacktestExportJobName: string;
    tags?: Tag[];
}
