package shared

type ProjectCollaboratorInviteRoleNameEnum string

const (
	ProjectCollaboratorInviteRoleNameEnumViewer       ProjectCollaboratorInviteRoleNameEnum = "viewer"
	ProjectCollaboratorInviteRoleNameEnumCollaborator ProjectCollaboratorInviteRoleNameEnum = "collaborator"
)

type ProjectCollaboratorInvite struct {
	Comment  *string                               `json:"comment,omitempty"`
	Email    *string                               `json:"email,omitempty"`
	RoleName ProjectCollaboratorInviteRoleNameEnum `json:"role_name"`
	UserID   *int64                                `json:"user_id,omitempty"`
}
