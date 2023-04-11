import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A *section* is a subdivision of a project that groups tasks together. It can either be a header above a list of tasks in a list view or a column in a board view of a project.
 */
export declare class SectionCompact extends SpeakeasyBase {
    /**
     * Globally unique identifier of the resource, as a string.
     */
    gid?: string;
    /**
     * The name of the section (i.e. the text displayed as the section header).
     */
    name?: string;
    /**
     * The base type of this resource.
     */
    resourceType?: string;
}
