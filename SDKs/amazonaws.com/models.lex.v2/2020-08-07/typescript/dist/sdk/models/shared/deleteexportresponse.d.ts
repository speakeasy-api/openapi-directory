import { SpeakeasyBase } from "../../../internal/utils";
import { ExportStatusEnum } from "./exportstatusenum";
/**
 * Success
 */
export declare class DeleteExportResponse extends SpeakeasyBase {
    exportId?: string;
    exportStatus?: ExportStatusEnum;
}
