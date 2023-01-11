import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Add a collaborator to a resource.
**/
export declare class ResourceCollaboratorCreation extends SpeakeasyBase {
    aclAdmin?: boolean;
    aclRead?: boolean;
    aclWrite?: boolean;
    group?: string;
    user?: string;
    userEmail?: string;
    userToken?: string;
}
