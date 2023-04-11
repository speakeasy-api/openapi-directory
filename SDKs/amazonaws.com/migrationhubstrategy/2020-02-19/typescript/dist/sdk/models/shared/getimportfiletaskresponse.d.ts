import { SpeakeasyBase } from "../../../internal/utils";
import { ImportFileTaskStatusEnum } from "./importfiletaskstatusenum";
/**
 * Success
 */
export declare class GetImportFileTaskResponse extends SpeakeasyBase {
    completionTime?: Date;
    id?: string;
    importName?: string;
    inputS3Bucket?: string;
    inputS3Key?: string;
    numberOfRecordsFailed?: number;
    numberOfRecordsSuccess?: number;
    startTime?: Date;
    status?: ImportFileTaskStatusEnum;
    statusReportS3Bucket?: string;
    statusReportS3Key?: string;
}
