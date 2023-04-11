import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Provides statistics for each data field imported into to an Amazon Forecast dataset with the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_CreateDatasetImportJob.html">CreateDatasetImportJob</a> operation.
 */
export declare class Statistics extends SpeakeasyBase {
    avg?: number;
    count?: number;
    countDistinct?: number;
    countDistinctLong?: number;
    countLong?: number;
    countNan?: number;
    countNanLong?: number;
    countNull?: number;
    countNullLong?: number;
    max?: string;
    min?: string;
    stddev?: number;
}
