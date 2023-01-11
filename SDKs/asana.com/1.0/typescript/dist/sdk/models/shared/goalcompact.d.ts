import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A *user* object represents an account in Asana that can be given access to various workspaces, projects, and tasks.
**/
export declare class GoalCompactOwner extends SpeakeasyBase {
    gid?: string;
    name?: string;
    resourceType?: string;
}
/**
 * A generic Asana Resource, containing a globally unique identifier.
**/
export declare class GoalCompact extends SpeakeasyBase {
    gid?: string;
    name?: string;
    owner?: GoalCompactOwner;
    resourceType?: string;
}
