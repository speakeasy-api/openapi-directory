import { SpeakeasyBase } from "../../../internal/utils";
import { DataQualitySummary } from "./dataqualitysummary";
import { DatasetStatusEnum } from "./datasetstatusenum";
import { IngestedFilesSummary } from "./ingestedfilessummary";
import { IngestionInputConfiguration } from "./ingestioninputconfiguration";
/**
 * Success
 */
export declare class DescribeDatasetResponse extends SpeakeasyBase {
    createdAt?: Date;
    dataEndTime?: Date;
    dataQualitySummary?: DataQualitySummary;
    dataStartTime?: Date;
    datasetArn?: string;
    datasetName?: string;
    ingestedFilesSummary?: IngestedFilesSummary;
    ingestionInputConfiguration?: IngestionInputConfiguration;
    lastUpdatedAt?: Date;
    roleArn?: string;
    schema?: string;
    serverSideKmsKeyId?: string;
    status?: DatasetStatusEnum;
}
