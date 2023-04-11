import { SpeakeasyBase } from "../../../internal/utils";
import { DataModelConfiguration } from "./datamodelconfiguration";
import { DataSourceConfiguration } from "./datasourceconfiguration";
import { ReportConfiguration } from "./reportconfiguration";
export declare class CreateBatchLoadTaskRequest extends SpeakeasyBase {
    clientToken?: string;
    /**
     * <p/>
     */
    dataModelConfiguration?: DataModelConfiguration;
    dataSourceConfiguration: DataSourceConfiguration;
    recordVersion?: number;
    /**
     * Report configuration for a batch load task. This contains details about where error reports are stored.
     */
    reportConfiguration: ReportConfiguration;
    targetDatabaseName: string;
    targetTableName: string;
}
