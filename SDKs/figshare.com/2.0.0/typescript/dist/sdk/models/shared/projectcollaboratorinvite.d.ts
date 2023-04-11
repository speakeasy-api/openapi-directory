import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Role of the the collaborator inside the project
 */
export declare enum ProjectCollaboratorInviteRoleNameEnum {
    Viewer = "viewer",
    Collaborator = "collaborator"
}
/**
 * viewer or collaborator role. User user_id or email of user
 */
export declare class ProjectCollaboratorInvite extends SpeakeasyBase {
    /**
     * Text sent when inviting the user to the project
     */
    comment?: string;
    /**
     * Collaborator email
     */
    email?: string;
    /**
     * Role of the the collaborator inside the project
     */
    roleName: ProjectCollaboratorInviteRoleNameEnum;
    /**
     * User id of the collaborator
     */
    userId?: number;
}
