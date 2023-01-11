import { SpeakeasyBase } from "../../../internal/utils";
import { ProjectCompact } from "./projectcompact";
/**
 * A *section* is a subdivision of a project that groups tasks together. It can either be a header above a list of tasks in a list view or a column in a board view of a project.
**/
export declare class SectionResponse extends SpeakeasyBase {
    createdAt?: Date;
    gid?: string;
    name?: string;
    project?: ProjectCompact;
    projects?: ProjectCompact[];
    resourceType?: string;
}
