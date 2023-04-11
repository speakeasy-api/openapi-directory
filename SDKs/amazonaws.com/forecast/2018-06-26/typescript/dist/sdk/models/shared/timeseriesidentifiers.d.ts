import { SpeakeasyBase } from "../../../internal/utils";
import { DataSource } from "./datasource";
import { Schema } from "./schema";
/**
 * Details about the import file that contains the time series for which you want to create forecasts.
 */
export declare class TimeSeriesIdentifiers extends SpeakeasyBase {
    /**
     * The source of your data, an Identity and Access Management (IAM) role that allows Amazon Forecast to access the data and, optionally, an Key Management Service (KMS) key.
     */
    dataSource?: DataSource;
    format?: string;
    /**
     * Defines the fields of a dataset.
     */
    schema?: Schema;
}
