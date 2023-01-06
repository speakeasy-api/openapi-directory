package shared

// ScoreCommentCreation
// Creation of a comment
type ScoreCommentCreation struct {
	Comment    string               `json:"comment"`
	Context    *ScoreCommentContext `json:"context,omitempty"`
	Mentions   []string             `json:"mentions,omitempty"`
	RawComment *string              `json:"rawComment,omitempty"`
	ReplyTo    *string              `json:"replyTo,omitempty"`
	Revision   *string              `json:"revision,omitempty"`
}
