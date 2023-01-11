import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A *project* represents a prioritized list of tasks in Asana or a board with columns of tasks represented as cards. It exists in a single workspace or organization and is accessible to a subset of users in that workspace or organization, depending on its permissions.
**/
export declare class ProjectCompact extends SpeakeasyBase {
    gid?: string;
    name?: string;
    resourceType?: string;
}
