import { SpeakeasyBase } from "../../../internal/utils";
import { ReadSetImportJobStatusEnum } from "./readsetimportjobstatusenum";
/**
 * Success
 */
export declare class StartReadSetImportJobResponse extends SpeakeasyBase {
    creationTime: Date;
    id: string;
    roleArn: string;
    sequenceStoreId: string;
    status: ReadSetImportJobStatusEnum;
}
