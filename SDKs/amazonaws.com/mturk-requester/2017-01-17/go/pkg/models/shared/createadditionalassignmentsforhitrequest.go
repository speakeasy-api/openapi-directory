package shared

type CreateAdditionalAssignmentsForHitRequest struct {
	HITID                         string  `json:"HITId"`
	NumberOfAdditionalAssignments int64   `json:"NumberOfAdditionalAssignments"`
	UniqueRequestToken            *string `json:"UniqueRequestToken,omitempty"`
}
