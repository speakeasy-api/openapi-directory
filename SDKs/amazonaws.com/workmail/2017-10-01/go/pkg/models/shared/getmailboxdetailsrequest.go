package shared

type GetMailboxDetailsRequest struct {
	OrganizationID map[string]interface{} `json:"OrganizationId"`
	UserID         string                 `json:"UserId"`
}
