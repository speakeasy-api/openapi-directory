package shared

// ScoreCommentUpdate
// Update of a comment
type ScoreCommentUpdate struct {
	Comment    *string              `json:"comment,omitempty"`
	Context    *ScoreCommentContext `json:"context,omitempty"`
	RawComment *string              `json:"rawComment,omitempty"`
	Revision   *string              `json:"revision,omitempty"`
}
