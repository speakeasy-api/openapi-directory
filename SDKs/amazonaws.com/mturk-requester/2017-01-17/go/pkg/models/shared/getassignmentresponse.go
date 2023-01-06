package shared

type GetAssignmentResponse struct {
	Assignment *Assignment `json:"Assignment,omitempty"`
	HIT        *Hit        `json:"HIT,omitempty"`
}
