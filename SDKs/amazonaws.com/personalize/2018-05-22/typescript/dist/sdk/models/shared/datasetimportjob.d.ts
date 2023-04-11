import { SpeakeasyBase } from "../../../internal/utils";
import { DataSource } from "./datasource";
import { ImportModeEnum } from "./importmodeenum";
/**
 * <p>Describes a job that imports training data from a data source (Amazon S3 bucket) to an Amazon Personalize dataset. For more information, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDatasetImportJob.html">CreateDatasetImportJob</a>.</p> <p>A dataset import job can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</p> </li> </ul>
 */
export declare class DatasetImportJob extends SpeakeasyBase {
    creationDateTime?: Date;
    dataSource?: DataSource;
    datasetArn?: string;
    datasetImportJobArn?: string;
    failureReason?: string;
    importMode?: ImportModeEnum;
    jobName?: string;
    lastUpdatedDateTime?: Date;
    publishAttributionMetricsToS3?: boolean;
    roleArn?: string;
    status?: string;
}
