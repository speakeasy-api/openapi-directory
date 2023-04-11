import { SpeakeasyBase } from "../../../internal/utils";
import { S3Config } from "./s3config";
import { Schema } from "./schema";
/**
 * A replacement dataset is a modified version of the baseline related time series that contains only the values that you want to include in a what-if forecast. The replacement dataset must contain the forecast dimensions and item identifiers in the baseline related time series as well as at least 1 changed time series. This dataset is merged with the baseline related time series to create a transformed dataset that is used for the what-if forecast.
 */
export declare class TimeSeriesReplacementsDataSource extends SpeakeasyBase {
    format?: string;
    /**
     * The path to the file(s) in an Amazon Simple Storage Service (Amazon S3) bucket, and an Identity and Access Management (IAM) role that Amazon Forecast can assume to access the file(s). Optionally, includes an Key Management Service (KMS) key. This object is part of the <a>DataSource</a> object that is submitted in the <a>CreateDatasetImportJob</a> request, and part of the <a>DataDestination</a> object.
     */
    s3Config: S3Config;
    /**
     * Defines the fields of a dataset.
     */
    schema: Schema;
    timestampFormat?: string;
}
