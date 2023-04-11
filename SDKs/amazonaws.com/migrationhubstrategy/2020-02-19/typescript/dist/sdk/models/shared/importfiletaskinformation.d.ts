import { SpeakeasyBase } from "../../../internal/utils";
import { ImportFileTaskStatusEnum } from "./importfiletaskstatusenum";
/**
 *  Information about the import file tasks you request.
 */
export declare class ImportFileTaskInformation extends SpeakeasyBase {
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
