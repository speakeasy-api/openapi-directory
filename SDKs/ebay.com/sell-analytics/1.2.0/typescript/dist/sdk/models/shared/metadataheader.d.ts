import { SpeakeasyBase } from "../../../internal/utils";
import { Definition } from "./definition";
/**
 * Type that defines the metadata header fields.
 */
export declare class MetadataHeader extends SpeakeasyBase {
    /**
     * The key value used for the report. For example: &quot;key&quot;: &quot;LISTING_ID&quot;
     */
    key?: string;
    /**
     * The list of dimension key values used for the report header. Each list element contains the key name, its data type, and its localized name. For example: &quot;metadataKeys&quot;: [ &nbsp;&nbsp;&quot;key&quot;: &quot;LISTING_TITLE&quot;, &nbsp;&nbsp;&quot;localizedName&quot;: &quot;Listing title&quot;, &nbsp;&nbsp;&quot;dataType&quot;: &quot;STRING&quot;
     */
    metadataKeys?: Definition[];
}
