import { SpeakeasyBase } from "../../../internal/utils";
import { ConfluencePageToIndexFieldMapping } from "./confluencepagetoindexfieldmapping";
/**
 * Configuration of the page settings for the Confluence data source.
 */
export declare class ConfluencePageConfiguration extends SpeakeasyBase {
    pageFieldMappings?: ConfluencePageToIndexFieldMapping[];
}
