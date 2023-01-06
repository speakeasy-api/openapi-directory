package shared

import (
	"time"
)

// Webhook1
// Information about a webhook that connects repository events to a build project in CodeBuild.
type Webhook1 struct {
	BranchFilter       *string               `json:"branchFilter,omitempty"`
	BuildType          *WebhookBuildTypeEnum `json:"buildType,omitempty"`
	FilterGroups       [][]WebhookFilter     `json:"filterGroups,omitempty"`
	LastModifiedSecret *time.Time            `json:"lastModifiedSecret,omitempty"`
	PayloadURL         *string               `json:"payloadUrl,omitempty"`
	Secret             *string               `json:"secret,omitempty"`
	URL                *string               `json:"url,omitempty"`
}
