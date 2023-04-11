import { SpeakeasyBase } from "../../../internal/utils";
import { DatasetExportJobOutput } from "./datasetexportjoboutput";
import { IngestionModeEnum } from "./ingestionmodeenum";
/**
 * <p>Describes a job that exports a dataset to an Amazon S3 bucket. For more information, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDatasetExportJob.html">CreateDatasetExportJob</a>.</p> <p>A dataset export job can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</p> </li> </ul>
 */
export declare class DatasetExportJob extends SpeakeasyBase {
    creationDateTime?: Date;
    datasetArn?: string;
    datasetExportJobArn?: string;
    failureReason?: string;
    ingestionMode?: IngestionModeEnum;
    jobName?: string;
    jobOutput?: DatasetExportJobOutput;
    lastUpdatedDateTime?: Date;
    roleArn?: string;
    status?: string;
}
