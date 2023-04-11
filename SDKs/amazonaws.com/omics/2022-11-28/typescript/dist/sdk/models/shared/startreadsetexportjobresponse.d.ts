import { SpeakeasyBase } from "../../../internal/utils";
import { ReadSetExportJobStatusEnum } from "./readsetexportjobstatusenum";
/**
 * Success
 */
export declare class StartReadSetExportJobResponse extends SpeakeasyBase {
    creationTime: Date;
    destination: string;
    id: string;
    sequenceStoreId: string;
    status: ReadSetExportJobStatusEnum;
}
