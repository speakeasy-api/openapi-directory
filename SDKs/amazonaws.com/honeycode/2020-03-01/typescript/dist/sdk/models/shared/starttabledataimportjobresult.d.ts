import { SpeakeasyBase } from "../../../internal/utils";
import { TableDataImportJobStatusEnum } from "./tabledataimportjobstatusenum";
/**
 * Success
 */
export declare class StartTableDataImportJobResult extends SpeakeasyBase {
    jobId: string;
    jobStatus: TableDataImportJobStatusEnum;
}
