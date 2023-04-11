import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorReportLocation } from "./errorreportlocation";
import { File } from "./file";
import { JobConfiguration } from "./jobconfiguration";
import { JobStatusEnum } from "./jobstatusenum";
/**
 * Success
 */
export declare class DescribeBulkImportJobResponse extends SpeakeasyBase {
    errorReportLocation: ErrorReportLocation;
    files: File[];
    jobConfiguration: JobConfiguration;
    jobCreationDate: Date;
    jobId: string;
    jobLastUpdateDate: Date;
    jobName: string;
    jobRoleArn: string;
    jobStatus: JobStatusEnum;
}
