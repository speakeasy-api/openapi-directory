package shared

// EmailListRelationships
// Related record summary info
type EmailListRelationships struct {
	OwnerUser *EmailListOwnerUser `json:"ownerUser,omitempty"`
}
