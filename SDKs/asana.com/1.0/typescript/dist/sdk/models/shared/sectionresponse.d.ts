import { SpeakeasyBase } from "../../../internal/utils";
import { ProjectCompact } from "./projectcompact";
/**
 * A *section* is a subdivision of a project that groups tasks together. It can either be a header above a list of tasks in a list view or a column in a board view of a project.
 */
export declare class SectionResponse extends SpeakeasyBase {
    /**
     * The time at which this resource was created.
     */
    createdAt?: Date;
    /**
     * Globally unique identifier of the resource, as a string.
     */
    gid?: string;
    /**
     * The name of the section (i.e. the text displayed as the section header).
     */
    name?: string;
    project?: ProjectCompact;
    /**
     * *Deprecated - please use project instead*
     */
    projects?: ProjectCompact[];
    /**
     * The base type of this resource.
     */
    resourceType?: string;
}
