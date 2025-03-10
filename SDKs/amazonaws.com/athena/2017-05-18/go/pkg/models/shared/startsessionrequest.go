// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

type StartSessionRequest struct {
	ClientRequestToken          *string             `json:"ClientRequestToken,omitempty"`
	Description                 *string             `json:"Description,omitempty"`
	EngineConfiguration         EngineConfiguration `json:"EngineConfiguration"`
	NotebookVersion             *string             `json:"NotebookVersion,omitempty"`
	SessionIdleTimeoutInMinutes *int64              `json:"SessionIdleTimeoutInMinutes,omitempty"`
	WorkGroup                   string              `json:"WorkGroup"`
}
