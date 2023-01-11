import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The rights of the current user on a score or collection
**/
export declare class ResourceRights extends SpeakeasyBase {
    aclAdmin?: boolean;
    aclRead?: boolean;
    aclWrite?: boolean;
    isCollaborator?: boolean;
}
