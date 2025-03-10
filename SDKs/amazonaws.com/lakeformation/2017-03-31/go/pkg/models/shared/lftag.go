// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// LFTag - A structure that allows an admin to grant user permissions on certain conditions. For example, granting a role access to all columns that do not have the LF-tag 'PII' in tables that have the LF-tag 'Prod'.
type LFTag struct {
	TagKey    string   `json:"TagKey"`
	TagValues []string `json:"TagValues"`
}
