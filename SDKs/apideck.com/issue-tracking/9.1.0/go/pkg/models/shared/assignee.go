// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

type AssigneeInput struct {
	// A unique identifier for an object.
	ID string `json:"id"`
}

type Assignee struct {
	// A unique identifier for an object.
	ID       string  `json:"id"`
	Username *string `json:"username,omitempty"`
}
