import { SpeakeasyBase } from "../../../internal/utils";
import { BatchLoadDataFormatEnum } from "./batchloaddataformatenum";
import { CsvConfiguration } from "./csvconfiguration";
import { DataSourceS3Configuration } from "./datasources3configuration";
/**
 * Defines configuration details about the data source.
 */
export declare class DataSourceConfiguration extends SpeakeasyBase {
    /**
     * A delimited data format where the column separator can be a comma and the record separator is a newline character.
     */
    csvConfiguration?: CsvConfiguration;
    dataFormat: BatchLoadDataFormatEnum;
    dataSourceS3Configuration: DataSourceS3Configuration;
}
