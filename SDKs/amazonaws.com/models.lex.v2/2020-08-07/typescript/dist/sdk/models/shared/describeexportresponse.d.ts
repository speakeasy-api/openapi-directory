import { SpeakeasyBase } from "../../../internal/utils";
import { ExportResourceSpecification } from "./exportresourcespecification";
import { ExportStatusEnum } from "./exportstatusenum";
import { ImportExportFileFormatEnum } from "./importexportfileformatenum";
/**
 * Success
 */
export declare class DescribeExportResponse extends SpeakeasyBase {
    creationDateTime?: Date;
    downloadUrl?: string;
    exportId?: string;
    exportStatus?: ExportStatusEnum;
    failureReasons?: string[];
    fileFormat?: ImportExportFileFormatEnum;
    lastUpdatedDateTime?: Date;
    resourceSpecification?: ExportResourceSpecification;
}
