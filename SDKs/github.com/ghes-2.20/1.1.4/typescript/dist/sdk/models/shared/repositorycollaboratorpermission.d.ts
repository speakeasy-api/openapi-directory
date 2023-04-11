import { SpeakeasyBase } from "../../../internal/utils";
import { NullableSimpleUser } from "./nullablesimpleuser";
/**
 * Repository Collaborator Permission
 */
export declare class RepositoryCollaboratorPermission extends SpeakeasyBase {
    permission: string;
    /**
     * Simple User
     */
    user: NullableSimpleUser;
}
