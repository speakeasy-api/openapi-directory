import { SpeakeasyBase } from "../../../internal/utils";
import { ReadSetExportJobStatusEnum } from "./readsetexportjobstatusenum";
/**
 * Details about a read set export job.
 */
export declare class ExportReadSetJobDetail extends SpeakeasyBase {
    completionTime?: Date;
    creationTime: Date;
    destination: string;
    id: string;
    sequenceStoreId: string;
    status: ReadSetExportJobStatusEnum;
}
