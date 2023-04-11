import { SpeakeasyBase } from "../../../internal/utils";
import { DatastoreProperties } from "./datastoreproperties";
/**
 * Success
 */
export declare class ListFHIRDatastoresResponse extends SpeakeasyBase {
    datastorePropertiesList: DatastoreProperties[];
    nextToken?: string;
}
