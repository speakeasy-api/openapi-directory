import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorCodeEnum } from "./errorcodeenum";
import { TableDataImportJobMetadata } from "./tabledataimportjobmetadata";
import { TableDataImportJobStatusEnum } from "./tabledataimportjobstatusenum";
/**
 * Success
 */
export declare class DescribeTableDataImportJobResult extends SpeakeasyBase {
    errorCode?: ErrorCodeEnum;
    jobMetadata: TableDataImportJobMetadata;
    jobStatus: TableDataImportJobStatusEnum;
    message: string;
}
