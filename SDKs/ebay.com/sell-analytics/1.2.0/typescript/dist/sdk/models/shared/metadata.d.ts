import { SpeakeasyBase } from "../../../internal/utils";
import { MetadataHeader } from "./metadataheader";
import { MetadataRecord } from "./metadatarecord";
/**
 * Type the defines the metadata information of the report. This includes the headers and the individual metadata records.
 */
export declare class Metadata extends SpeakeasyBase {
    /**
     * Type that defines the metadata header fields.
     */
    metadataHeader?: MetadataHeader;
    /**
     * A list of the individual report records.
     */
    metadataRecords?: MetadataRecord[];
}
