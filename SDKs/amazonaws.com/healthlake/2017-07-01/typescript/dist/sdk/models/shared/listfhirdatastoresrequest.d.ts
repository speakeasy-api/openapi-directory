import { SpeakeasyBase } from "../../../internal/utils";
import { DatastoreFilter } from "./datastorefilter";
export declare class ListFHIRDatastoresRequest extends SpeakeasyBase {
    filter?: DatastoreFilter;
    maxResults?: number;
    nextToken?: string;
}
