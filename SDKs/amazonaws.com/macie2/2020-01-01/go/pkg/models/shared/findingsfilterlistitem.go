// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// FindingsFilterListItem - Provides information about a findings filter.
type FindingsFilterListItem struct {
	Action *FindingsFilterActionEnum `json:"action,omitempty"`
	Arn    *string                   `json:"arn,omitempty"`
	ID     *string                   `json:"id,omitempty"`
	Name   *string                   `json:"name,omitempty"`
	Tags   map[string]string         `json:"tags,omitempty"`
}
