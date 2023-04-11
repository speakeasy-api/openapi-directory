import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A *user* object represents an account in Asana that can be given access to various workspaces, projects, and tasks.
 */
export declare class GoalCompactOwner extends SpeakeasyBase {
    /**
     * Globally unique identifier of the resource, as a string.
     */
    gid?: string;
    /**
     * *Read-only except when same user as requester*. The user’s name.
     */
    name?: string;
    /**
     * The base type of this resource.
     */
    resourceType?: string;
}
/**
 * A generic Asana Resource, containing a globally unique identifier.
 */
export declare class GoalCompact extends SpeakeasyBase {
    /**
     * Globally unique identifier of the resource, as a string.
     */
    gid?: string;
    /**
     * The name of the goal.
     */
    name?: string;
    owner?: GoalCompactOwner;
    /**
     * The base type of this resource.
     */
    resourceType?: string;
}
