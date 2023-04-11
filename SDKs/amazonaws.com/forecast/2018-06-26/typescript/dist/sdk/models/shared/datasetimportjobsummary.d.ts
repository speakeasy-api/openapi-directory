import { SpeakeasyBase } from "../../../internal/utils";
import { DataSource } from "./datasource";
import { ImportModeEnum } from "./importmodeenum";
/**
 * Provides a summary of the dataset import job properties used in the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_ListDatasetImportJobs.html">ListDatasetImportJobs</a> operation. To get the complete set of properties, call the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeDatasetImportJob.html">DescribeDatasetImportJob</a> operation, and provide the <code>DatasetImportJobArn</code>.
 */
export declare class DatasetImportJobSummary extends SpeakeasyBase {
    creationTime?: Date;
    dataSource?: DataSource;
    datasetImportJobArn?: string;
    datasetImportJobName?: string;
    importMode?: ImportModeEnum;
    lastModificationTime?: Date;
    message?: string;
    status?: string;
}
