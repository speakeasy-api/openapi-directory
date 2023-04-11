import { SpeakeasyBase } from "../../../internal/utils";
import { RetentionPeriod } from "./retentionperiod";
/**
 * Success
 */
export declare class CreateDatastoreResponse extends SpeakeasyBase {
    datastoreArn?: string;
    datastoreName?: string;
    retentionPeriod?: RetentionPeriod;
}
