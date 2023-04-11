import { SpeakeasyBase } from "../../../internal/utils";
import { ImportDataSource } from "./importdatasource";
import { ImportJobSubmitter } from "./importjobsubmitter";
import { ImportOptions } from "./importoptions";
/**
 * The metadata associated with the table data import job that was submitted.
 */
export declare class TableDataImportJobMetadata extends SpeakeasyBase {
    dataSource: ImportDataSource;
    importOptions: ImportOptions;
    submitTime: Date;
    submitter: ImportJobSubmitter;
}
