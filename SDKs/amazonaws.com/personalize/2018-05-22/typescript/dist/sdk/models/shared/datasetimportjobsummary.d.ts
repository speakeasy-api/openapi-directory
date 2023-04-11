import { SpeakeasyBase } from "../../../internal/utils";
import { ImportModeEnum } from "./importmodeenum";
/**
 * Provides a summary of the properties of a dataset import job. For a complete listing, call the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeDatasetImportJob.html">DescribeDatasetImportJob</a> API.
 */
export declare class DatasetImportJobSummary extends SpeakeasyBase {
    creationDateTime?: Date;
    datasetImportJobArn?: string;
    failureReason?: string;
    importMode?: ImportModeEnum;
    jobName?: string;
    lastUpdatedDateTime?: Date;
    status?: string;
}
