package shared

type Account struct {
	Active              *int64  `json:"active,omitempty"`
	CreatedDate         *string `json:"created_date,omitempty"`
	Email               *string `json:"email,omitempty"`
	FirstName           *string `json:"first_name,omitempty"`
	GroupID             *int64  `json:"group_id,omitempty"`
	ID                  *int64  `json:"id,omitempty"`
	InstitutionID       *int64  `json:"institution_id,omitempty"`
	InstitutionUserID   *string `json:"institution_user_id,omitempty"`
	LastName            *string `json:"last_name,omitempty"`
	MaximumFileSize     *int64  `json:"maximum_file_size,omitempty"`
	ModifiedDate        *string `json:"modified_date,omitempty"`
	PendingQuotaRequest *bool   `json:"pending_quota_request,omitempty"`
	Quota               *int64  `json:"quota,omitempty"`
	UsedQuota           *int64  `json:"used_quota,omitempty"`
	UsedQuotaPrivate    *int64  `json:"used_quota_private,omitempty"`
	UsedQuotaPublic     *int64  `json:"used_quota_public,omitempty"`
}
