package shared

// GoalResponse
// A generic Asana Resource, containing a globally unique identifier.
type GoalResponse struct {
	Likes    []Like `json:"likes,omitempty"`
	NumLikes *int64 `json:"num_likes,omitempty"`
}
