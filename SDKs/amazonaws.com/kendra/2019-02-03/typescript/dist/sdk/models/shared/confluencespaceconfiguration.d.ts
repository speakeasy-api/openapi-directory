import { SpeakeasyBase } from "../../../internal/utils";
import { ConfluenceSpaceToIndexFieldMapping } from "./confluencespacetoindexfieldmapping";
/**
 * Configuration information for indexing Confluence spaces.
 */
export declare class ConfluenceSpaceConfiguration extends SpeakeasyBase {
    crawlArchivedSpaces?: boolean;
    crawlPersonalSpaces?: boolean;
    excludeSpaces?: string[];
    includeSpaces?: string[];
    spaceFieldMappings?: ConfluenceSpaceToIndexFieldMapping[];
}
