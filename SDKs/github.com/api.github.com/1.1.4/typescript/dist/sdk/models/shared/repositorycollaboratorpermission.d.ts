import { SpeakeasyBase } from "../../../internal/utils";
import { NullableCollaborator } from "./nullablecollaborator";
/**
 * Repository Collaborator Permission
 */
export declare class RepositoryCollaboratorPermission extends SpeakeasyBase {
    permission: string;
    roleName: string;
    /**
     * Collaborator
     */
    user: NullableCollaborator;
}
