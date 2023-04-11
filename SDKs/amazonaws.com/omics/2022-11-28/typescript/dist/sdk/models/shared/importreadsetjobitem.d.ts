import { SpeakeasyBase } from "../../../internal/utils";
import { ReadSetImportJobStatusEnum } from "./readsetimportjobstatusenum";
/**
 * An import read set job.
 */
export declare class ImportReadSetJobItem extends SpeakeasyBase {
    completionTime?: Date;
    creationTime: Date;
    id: string;
    roleArn: string;
    sequenceStoreId: string;
    status: ReadSetImportJobStatusEnum;
}
