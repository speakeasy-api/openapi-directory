import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A *team* is used to group related projects and people together within an organization. Each project in an organization is associated with a team.
 */
export declare class TeamCompact extends SpeakeasyBase {
    /**
     * Globally unique identifier of the resource, as a string.
     */
    gid?: string;
    /**
     * The name of the team.
     */
    name?: string;
    /**
     * The base type of this resource.
     */
    resourceType?: string;
}
