import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A *workspace* is the highest-level organizational unit in Asana. All projects and tasks have an associated workspace.
**/
export declare class WorkspaceCompact extends SpeakeasyBase {
    gid?: string;
    name?: string;
    resourceType?: string;
}
/**
 * A *workspace* is the highest-level organizational unit in Asana. All projects and tasks have an associated workspace.
**/
export declare class WorkspaceCompactInput extends SpeakeasyBase {
    name?: string;
}
