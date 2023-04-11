import { SpeakeasyBase } from "../../../internal/utils";
import { MagneticStoreWriteProperties } from "./magneticstorewriteproperties";
import { RetentionProperties } from "./retentionproperties";
import { Tag } from "./tag";
export declare class CreateTableRequest extends SpeakeasyBase {
    databaseName: string;
    magneticStoreWriteProperties?: MagneticStoreWriteProperties;
    retentionProperties?: RetentionProperties;
    tableName: string;
    tags?: Tag[];
}
