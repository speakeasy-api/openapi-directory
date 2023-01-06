package shared

type Group struct {
	AssociationCriteria *string `json:"association_criteria,omitempty"`
	ID                  *int64  `json:"id,omitempty"`
	Name                *string `json:"name,omitempty"`
	ParentID            *int64  `json:"parent_id,omitempty"`
	ResourceID          *string `json:"resource_id,omitempty"`
}
