// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

type ConfigurationStatusProgress struct {
	Key    string `json:"key"`
	Status string `json:"status"`
}

// ConfigurationStatus - Response
type ConfigurationStatus struct {
	Progress []ConfigurationStatusProgress `json:"progress,omitempty"`
	Status   *string                       `json:"status,omitempty"`
}
