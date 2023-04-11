import { SpeakeasyBase } from "../../../internal/utils";
import { ExportReadSetDetail } from "./exportreadsetdetail";
import { ReadSetExportJobStatusEnum } from "./readsetexportjobstatusenum";
/**
 * Success
 */
export declare class GetReadSetExportJobResponse extends SpeakeasyBase {
    completionTime?: Date;
    creationTime: Date;
    destination: string;
    id: string;
    readSets?: ExportReadSetDetail[];
    sequenceStoreId: string;
    status: ReadSetExportJobStatusEnum;
    statusMessage?: string;
}
