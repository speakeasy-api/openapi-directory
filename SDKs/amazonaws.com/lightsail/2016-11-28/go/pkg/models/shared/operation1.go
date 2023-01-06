package shared

import (
	"time"
)

// Operation1
// Describes the API operation.
type Operation1 struct {
	CreatedAt        *time.Time             `json:"createdAt,omitempty"`
	ErrorCode        *string                `json:"errorCode,omitempty"`
	ErrorDetails     *string                `json:"errorDetails,omitempty"`
	ID               *string                `json:"id,omitempty"`
	IsTerminal       *bool                  `json:"isTerminal,omitempty"`
	Location         *ResourceLocation      `json:"location,omitempty"`
	OperationDetails *string                `json:"operationDetails,omitempty"`
	OperationType    *OperationTypeEnum     `json:"operationType,omitempty"`
	ResourceName     *string                `json:"resourceName,omitempty"`
	ResourceType     map[string]interface{} `json:"resourceType,omitempty"`
	Status           *OperationStatusEnum   `json:"status,omitempty"`
	StatusChangedAt  *time.Time             `json:"statusChangedAt,omitempty"`
}
