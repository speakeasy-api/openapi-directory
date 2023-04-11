import { SpeakeasyBase } from "../../../internal/utils";
import { ImportReadSetSourceItem } from "./importreadsetsourceitem";
import { ReadSetImportJobStatusEnum } from "./readsetimportjobstatusenum";
/**
 * Success
 */
export declare class GetReadSetImportJobResponse extends SpeakeasyBase {
    completionTime?: Date;
    creationTime: Date;
    id: string;
    roleArn: string;
    sequenceStoreId: string;
    sources: ImportReadSetSourceItem[];
    status: ReadSetImportJobStatusEnum;
    statusMessage?: string;
}
