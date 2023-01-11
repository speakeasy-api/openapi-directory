import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ProjectCollaboratorInviteRoleNameEnum {
    Viewer = "viewer",
    Collaborator = "collaborator"
}


export class ProjectCollaboratorInvite extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=comment" })
  comment?: string;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=role_name" })
  roleName: ProjectCollaboratorInviteRoleNameEnum;

  @SpeakeasyMetadata({ data: "json, name=user_id" })
  userId?: number;
}
