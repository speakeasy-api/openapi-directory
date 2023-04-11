import { SpeakeasyBase } from "../../../internal/utils";
import { ExportResourceSpecification } from "./exportresourcespecification";
import { ExportStatusEnum } from "./exportstatusenum";
import { ImportExportFileFormatEnum } from "./importexportfileformatenum";
/**
 * Success
 */
export declare class CreateExportResponse extends SpeakeasyBase {
    creationDateTime?: Date;
    exportId?: string;
    exportStatus?: ExportStatusEnum;
    fileFormat?: ImportExportFileFormatEnum;
    resourceSpecification?: ExportResourceSpecification;
}
