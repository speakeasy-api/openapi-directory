package shared

type ProjectPrivateRoleEnum string

const (
	ProjectPrivateRoleEnumOwner        ProjectPrivateRoleEnum = "Owner"
	ProjectPrivateRoleEnumCollaborator ProjectPrivateRoleEnum = "Collaborator"
	ProjectPrivateRoleEnumViewer       ProjectPrivateRoleEnum = "Viewer"
)

type ProjectPrivateStorageEnum string

const (
	ProjectPrivateStorageEnumIndividual ProjectPrivateStorageEnum = "individual"
	ProjectPrivateStorageEnumGroup      ProjectPrivateStorageEnum = "group"
)

type ProjectPrivate struct {
	ID            *int64                     `json:"id,omitempty"`
	PublishedDate *string                    `json:"published_date,omitempty"`
	Role          *ProjectPrivateRoleEnum    `json:"role,omitempty"`
	Storage       *ProjectPrivateStorageEnum `json:"storage,omitempty"`
	Title         *string                    `json:"title,omitempty"`
	URL           *string                    `json:"url,omitempty"`
}
