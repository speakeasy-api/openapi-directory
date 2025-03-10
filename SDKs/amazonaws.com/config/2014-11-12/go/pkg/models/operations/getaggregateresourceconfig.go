// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"fmt"
	"net/http"
	"openapi/pkg/models/shared"
)

// GetAggregateResourceConfigXAmzTargetEnum
type GetAggregateResourceConfigXAmzTargetEnum string

const (
	GetAggregateResourceConfigXAmzTargetEnumStarlingDoveServiceGetAggregateResourceConfig GetAggregateResourceConfigXAmzTargetEnum = "StarlingDoveService.GetAggregateResourceConfig"
)

func (e GetAggregateResourceConfigXAmzTargetEnum) ToPointer() *GetAggregateResourceConfigXAmzTargetEnum {
	return &e
}

func (e *GetAggregateResourceConfigXAmzTargetEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "StarlingDoveService.GetAggregateResourceConfig":
		*e = GetAggregateResourceConfigXAmzTargetEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for GetAggregateResourceConfigXAmzTargetEnum: %v", v)
	}
}

type GetAggregateResourceConfigRequest struct {
	GetAggregateResourceConfigRequest shared.GetAggregateResourceConfigRequest `request:"mediaType=application/json"`
	XAmzAlgorithm                     *string                                  `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256                 *string                                  `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential                    *string                                  `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate                          *string                                  `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken                 *string                                  `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature                     *string                                  `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders                 *string                                  `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget                        GetAggregateResourceConfigXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type GetAggregateResourceConfigResponse struct {
	ContentType string
	// Success
	GetAggregateResourceConfigResponse *shared.GetAggregateResourceConfigResponse
	// NoSuchConfigurationAggregatorException
	NoSuchConfigurationAggregatorException interface{}
	// OversizedConfigurationItemException
	OversizedConfigurationItemException interface{}
	StatusCode                          int
	RawResponse                         *http.Response
	// ResourceNotDiscoveredException
	ResourceNotDiscoveredException interface{}
	// ValidationException
	ValidationException interface{}
}
