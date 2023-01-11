import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ProjectCollaboratorInviteRoleNameEnum {
    Viewer = "viewer",
    Collaborator = "collaborator"
}
export declare class ProjectCollaboratorInvite extends SpeakeasyBase {
    comment?: string;
    email?: string;
    roleName: ProjectCollaboratorInviteRoleNameEnum;
    userId?: number;
}
