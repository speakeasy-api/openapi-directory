package shared

type ProjectCompletePrivateRoleEnum string

const (
	ProjectCompletePrivateRoleEnumOwner        ProjectCompletePrivateRoleEnum = "Owner"
	ProjectCompletePrivateRoleEnumCollaborator ProjectCompletePrivateRoleEnum = "Collaborator"
	ProjectCompletePrivateRoleEnumViewer       ProjectCompletePrivateRoleEnum = "Viewer"
)

type ProjectCompletePrivateStorageEnum string

const (
	ProjectCompletePrivateStorageEnumIndividual ProjectCompletePrivateStorageEnum = "individual"
	ProjectCompletePrivateStorageEnumGroup      ProjectCompletePrivateStorageEnum = "group"
)

type ProjectCompletePrivate struct {
	Collaborators    []Collaborator                     `json:"collaborators,omitempty"`
	CreatedDate      *string                            `json:"created_date,omitempty"`
	Description      *string                            `json:"description,omitempty"`
	FigshareURL      *string                            `json:"figshare_url,omitempty"`
	Funding          *string                            `json:"funding,omitempty"`
	FundingList      []FundingInformation               `json:"funding_list,omitempty"`
	GroupID          *int64                             `json:"group_id,omitempty"`
	ID               *int64                             `json:"id,omitempty"`
	ModifiedDate     *string                            `json:"modified_date,omitempty"`
	PublishedDate    *string                            `json:"published_date,omitempty"`
	Quota            *int64                             `json:"quota,omitempty"`
	Role             *ProjectCompletePrivateRoleEnum    `json:"role,omitempty"`
	Storage          *ProjectCompletePrivateStorageEnum `json:"storage,omitempty"`
	Title            *string                            `json:"title,omitempty"`
	URL              *string                            `json:"url,omitempty"`
	UsedQuota        *int64                             `json:"used_quota,omitempty"`
	UsedQuotaPrivate *int64                             `json:"used_quota_private,omitempty"`
	UsedQuotaPublic  *int64                             `json:"used_quota_public,omitempty"`
}
