// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// SessionSummary - Contains summary information about a session.
type SessionSummary struct {
	Description     *string        `json:"Description,omitempty"`
	EngineVersion   *EngineVersion `json:"EngineVersion,omitempty"`
	NotebookVersion *string        `json:"NotebookVersion,omitempty"`
	SessionID       *string        `json:"SessionId,omitempty"`
	Status          *SessionStatus `json:"Status,omitempty"`
}
