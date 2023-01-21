package shared

import (
	"time"
)

type DescribeIndexResponse struct {
	CapacityUnits                     *CapacityUnitsConfiguration        `json:"CapacityUnits,omitempty"`
	CreatedAt                         *time.Time                         `json:"CreatedAt,omitempty"`
	Description                       *string                            `json:"Description,omitempty"`
	DocumentMetadataConfigurations    []DocumentMetadataConfiguration    `json:"DocumentMetadataConfigurations,omitempty"`
	Edition                           *IndexEditionEnum                  `json:"Edition,omitempty"`
	ErrorMessage                      *string                            `json:"ErrorMessage,omitempty"`
	ID                                *string                            `json:"Id,omitempty"`
	IndexStatistics                   *IndexStatistics                   `json:"IndexStatistics,omitempty"`
	Name                              *string                            `json:"Name,omitempty"`
	RoleArn                           *string                            `json:"RoleArn,omitempty"`
	ServerSideEncryptionConfiguration *ServerSideEncryptionConfiguration `json:"ServerSideEncryptionConfiguration,omitempty"`
	Status                            *IndexStatusEnum                   `json:"Status,omitempty"`
	UpdatedAt                         *time.Time                         `json:"UpdatedAt,omitempty"`
	UserContextPolicy                 *UserContextPolicyEnum             `json:"UserContextPolicy,omitempty"`
	UserTokenConfigurations           []UserTokenConfiguration           `json:"UserTokenConfigurations,omitempty"`
}
