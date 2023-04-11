import { SpeakeasyBase } from "../../../internal/utils";
import { ConfluenceBlogToIndexFieldMapping } from "./confluenceblogtoindexfieldmapping";
/**
 * Configuration of blog settings for the Confluence data source. Blogs are always indexed unless filtered from the index by the <code>ExclusionPatterns</code> or <code>InclusionPatterns</code> fields in the <code>ConfluenceConfiguration</code> object.
 */
export declare class ConfluenceBlogConfiguration extends SpeakeasyBase {
    blogFieldMappings?: ConfluenceBlogToIndexFieldMapping[];
}
