import { SpeakeasyBase } from "../../../internal/utils";
import { MagneticStoreWriteProperties } from "./magneticstorewriteproperties";
import { RetentionProperties } from "./retentionproperties";
import { TableStatusEnum } from "./tablestatusenum";
/**
 * Represents a database table in Timestream. Tables contain one or more related time series. You can modify the retention duration of the memory store and the magnetic store for a table.
 */
export declare class Table extends SpeakeasyBase {
    arn?: string;
    creationTime?: Date;
    databaseName?: string;
    lastUpdatedTime?: Date;
    magneticStoreWriteProperties?: MagneticStoreWriteProperties;
    retentionProperties?: RetentionProperties;
    tableName?: string;
    tableStatus?: TableStatusEnum;
}
