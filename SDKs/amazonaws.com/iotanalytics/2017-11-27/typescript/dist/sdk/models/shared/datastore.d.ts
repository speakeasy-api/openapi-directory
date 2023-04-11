import { SpeakeasyBase } from "../../../internal/utils";
import { DatastorePartitions } from "./datastorepartitions";
import { DatastoreStatusEnum } from "./datastorestatusenum";
import { DatastoreStorage } from "./datastorestorage";
import { FileFormatConfiguration } from "./fileformatconfiguration";
import { RetentionPeriod } from "./retentionperiod";
/**
 * Information about a data store.
 */
export declare class Datastore extends SpeakeasyBase {
    arn?: string;
    creationTime?: Date;
    datastorePartitions?: DatastorePartitions;
    fileFormatConfiguration?: FileFormatConfiguration;
    lastMessageArrivalTime?: Date;
    lastUpdateTime?: Date;
    name?: string;
    retentionPeriod?: RetentionPeriod;
    status?: DatastoreStatusEnum;
    storage?: DatastoreStorage;
}
