import { SpeakeasyBase } from "../../../internal/utils";
import { MonitoringCsvDatasetFormat } from "./monitoringcsvdatasetformat";
import { MonitoringJsonDatasetFormat } from "./monitoringjsondatasetformat";
/**
 * Represents the dataset format used when running a monitoring job.
 */
export declare class MonitoringDatasetFormat extends SpeakeasyBase {
    csv?: MonitoringCsvDatasetFormat;
    json?: MonitoringJsonDatasetFormat;
    parquet?: Record<string, any>;
}
