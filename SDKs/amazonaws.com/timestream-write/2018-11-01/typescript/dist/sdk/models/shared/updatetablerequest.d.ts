import { SpeakeasyBase } from "../../../internal/utils";
import { MagneticStoreWriteProperties } from "./magneticstorewriteproperties";
import { RetentionProperties } from "./retentionproperties";
export declare class UpdateTableRequest extends SpeakeasyBase {
    databaseName: string;
    magneticStoreWriteProperties?: MagneticStoreWriteProperties;
    retentionProperties?: RetentionProperties;
    tableName: string;
}
