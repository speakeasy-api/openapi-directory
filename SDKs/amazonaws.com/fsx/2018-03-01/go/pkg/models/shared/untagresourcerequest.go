package shared

// UntagResourceRequest
// The request object for <code>UntagResource</code> action.
type UntagResourceRequest struct {
	ResourceARN string   `json:"ResourceARN"`
	TagKeys     []string `json:"TagKeys"`
}
