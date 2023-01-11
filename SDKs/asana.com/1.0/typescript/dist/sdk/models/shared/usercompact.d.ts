import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A *user* object represents an account in Asana that can be given access to various workspaces, projects, and tasks.
**/
export declare class UserCompact extends SpeakeasyBase {
    gid?: string;
    name?: string;
    resourceType?: string;
}
/**
 * A *user* object represents an account in Asana that can be given access to various workspaces, projects, and tasks.
**/
export declare class UserCompactInput extends SpeakeasyBase {
    name?: string;
}
