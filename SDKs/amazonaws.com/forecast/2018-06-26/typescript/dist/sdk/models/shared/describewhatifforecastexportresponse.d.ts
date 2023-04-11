import { SpeakeasyBase } from "../../../internal/utils";
import { DataDestination } from "./datadestination";
/**
 * Success
 */
export declare class DescribeWhatIfForecastExportResponse extends SpeakeasyBase {
    creationTime?: Date;
    /**
     * The destination for an export job. Provide an S3 path, an Identity and Access Management (IAM) role that allows Amazon Forecast to access the location, and an Key Management Service (KMS) key (optional).
     */
    destination?: DataDestination;
    estimatedTimeRemainingInMinutes?: number;
    format?: string;
    lastModificationTime?: Date;
    message?: string;
    status?: string;
    whatIfForecastArns?: string[];
    whatIfForecastExportArn?: string;
    whatIfForecastExportName?: string;
}
