import { SpeakeasyBase } from "../../../internal/utils";
import { InputDataConfig } from "./inputdataconfig";
import { JobStatusEnum } from "./jobstatusenum";
import { OutputDataConfig } from "./outputdataconfig";
/**
 * Displays the properties of the import job, including the ID, Arn, Name, and the status of the Data Store.
 */
export declare class ImportJobProperties extends SpeakeasyBase {
    dataAccessRoleArn?: string;
    datastoreId: string;
    endTime?: Date;
    inputDataConfig: InputDataConfig;
    jobId: string;
    jobName?: string;
    /**
     * The output data configuration that was supplied when the export job was created.
     */
    jobOutputDataConfig?: OutputDataConfig;
    jobStatus: JobStatusEnum;
    message?: string;
    submitTime: Date;
}
