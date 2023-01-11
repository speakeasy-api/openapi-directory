import { SpeakeasyBase } from "../../../internal/utils";
import { Group } from "./group";
import { UserPublic } from "./userpublic";
/**
 * The rights of the current user on a score or collection
**/
export declare class ResourceCollaborator extends SpeakeasyBase {
    aclAdmin?: boolean;
    aclRead?: boolean;
    aclWrite?: boolean;
    collection?: string;
    group?: Group;
    id?: string;
    invited?: boolean;
    isCollaborator?: boolean;
    score?: string;
    user?: UserPublic;
    userEmail?: string;
}
