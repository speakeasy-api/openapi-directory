import { SpeakeasyBase } from "../../../internal/utils";
import { BatchLoadProgressReport } from "./batchloadprogressreport";
import { BatchLoadStatusEnum } from "./batchloadstatusenum";
import { DataModelConfiguration } from "./datamodelconfiguration";
import { DataSourceConfiguration } from "./datasourceconfiguration";
import { ReportConfiguration } from "./reportconfiguration";
/**
 * Details about a batch load task.
 */
export declare class BatchLoadTaskDescription extends SpeakeasyBase {
    creationTime?: Date;
    dataModelConfiguration?: DataModelConfiguration;
    dataSourceConfiguration?: DataSourceConfiguration;
    errorMessage?: string;
    lastUpdatedTime?: Date;
    progressReport?: BatchLoadProgressReport;
    recordVersion?: number;
    reportConfiguration?: ReportConfiguration;
    resumableUntil?: Date;
    targetDatabaseName?: string;
    targetTableName?: string;
    taskId?: string;
    taskStatus?: BatchLoadStatusEnum;
}
