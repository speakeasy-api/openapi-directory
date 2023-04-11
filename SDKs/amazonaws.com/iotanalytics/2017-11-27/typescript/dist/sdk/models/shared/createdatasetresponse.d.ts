import { SpeakeasyBase } from "../../../internal/utils";
import { RetentionPeriod } from "./retentionperiod";
/**
 * Success
 */
export declare class CreateDatasetResponse extends SpeakeasyBase {
    datasetArn?: string;
    datasetName?: string;
    retentionPeriod?: RetentionPeriod;
}
