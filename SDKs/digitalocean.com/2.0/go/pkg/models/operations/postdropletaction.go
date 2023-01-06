package operations

import (
	"openapi/pkg/models/shared"
)

type PostDropletActionPathParams struct {
	DropletID int64 `pathParam:"style=simple,explode=false,name=droplet_id"`
}

// PostDropletActionRequestBody1
// Specifies the action that will be taken on the Droplet.
type PostDropletActionRequestBody1 struct {
	Disk *bool   `json:"disk,omitempty"`
	Size *string `json:"size,omitempty"`
}

// PostDropletActionRequestBody2
// Specifies the action that will be taken on the Droplet.
type PostDropletActionRequestBody2 struct {
	Name *string `json:"name,omitempty"`
}

// PostDropletActionRequestBody3
// Specifies the action that will be taken on the Droplet.
type PostDropletActionRequestBody3 struct {
	Image *interface{} `json:"image,omitempty"`
}

// PostDropletActionRequestBody4
// Specifies the action that will be taken on the Droplet.
type PostDropletActionRequestBody4 struct {
	Name *string `json:"name,omitempty"`
}

// PostDropletActionRequestBody5
// Specifies the action that will be taken on the Droplet.
type PostDropletActionRequestBody5 struct {
	Image *int64 `json:"image,omitempty"`
}

// PostDropletActionRequestBody6
// Specifies the action that will be taken on the Droplet.
type PostDropletActionRequestBody6 struct {
	Kernel *int64 `json:"kernel,omitempty"`
}

type PostDropletActionRequestBody7TypeEnum string

const (
	PostDropletActionRequestBody7TypeEnumEnableBackups  PostDropletActionRequestBody7TypeEnum = "enable_backups"
	PostDropletActionRequestBody7TypeEnumDisableBackups PostDropletActionRequestBody7TypeEnum = "disable_backups"
	PostDropletActionRequestBody7TypeEnumReboot         PostDropletActionRequestBody7TypeEnum = "reboot"
	PostDropletActionRequestBody7TypeEnumPowerCycle     PostDropletActionRequestBody7TypeEnum = "power_cycle"
	PostDropletActionRequestBody7TypeEnumShutdown       PostDropletActionRequestBody7TypeEnum = "shutdown"
	PostDropletActionRequestBody7TypeEnumPowerOff       PostDropletActionRequestBody7TypeEnum = "power_off"
	PostDropletActionRequestBody7TypeEnumPowerOn        PostDropletActionRequestBody7TypeEnum = "power_on"
	PostDropletActionRequestBody7TypeEnumRestore        PostDropletActionRequestBody7TypeEnum = "restore"
	PostDropletActionRequestBody7TypeEnumPasswordReset  PostDropletActionRequestBody7TypeEnum = "password_reset"
	PostDropletActionRequestBody7TypeEnumResize         PostDropletActionRequestBody7TypeEnum = "resize"
	PostDropletActionRequestBody7TypeEnumRebuild        PostDropletActionRequestBody7TypeEnum = "rebuild"
	PostDropletActionRequestBody7TypeEnumRename         PostDropletActionRequestBody7TypeEnum = "rename"
	PostDropletActionRequestBody7TypeEnumChangeKernel   PostDropletActionRequestBody7TypeEnum = "change_kernel"
	PostDropletActionRequestBody7TypeEnumEnableIpv6     PostDropletActionRequestBody7TypeEnum = "enable_ipv6"
	PostDropletActionRequestBody7TypeEnumSnapshot       PostDropletActionRequestBody7TypeEnum = "snapshot"
)

// PostDropletActionRequestBody7
// Specifies the action that will be taken on the Droplet.
type PostDropletActionRequestBody7 struct {
	Type PostDropletActionRequestBody7TypeEnum `json:"type"`
}

type PostDropletAction401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id,omitempty"`
}

type PostDropletActionRequest struct {
	PathParams PostDropletActionPathParams
	Request    *interface{} `request:"mediaType=application/json"`
}

type PostDropletActionResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	PostDropletAction201ApplicationJSONAny                    *interface{}
	PostDropletAction401ApplicationJSONObject                 *PostDropletAction401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
