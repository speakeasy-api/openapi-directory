// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

type GetCommandInvocationRequest struct {
	CommandID  string  `json:"CommandId"`
	InstanceID string  `json:"InstanceId"`
	PluginName *string `json:"PluginName,omitempty"`
}
