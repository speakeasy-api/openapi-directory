// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"fmt"
	"net/http"
)

// UpdateAutomatedDiscoveryConfigurationRequestBodyStatusEnum - The status of the automated sensitive data discovery configuration for an Amazon Macie account. Valid values are:
type UpdateAutomatedDiscoveryConfigurationRequestBodyStatusEnum string

const (
	UpdateAutomatedDiscoveryConfigurationRequestBodyStatusEnumEnabled  UpdateAutomatedDiscoveryConfigurationRequestBodyStatusEnum = "ENABLED"
	UpdateAutomatedDiscoveryConfigurationRequestBodyStatusEnumDisabled UpdateAutomatedDiscoveryConfigurationRequestBodyStatusEnum = "DISABLED"
)

func (e UpdateAutomatedDiscoveryConfigurationRequestBodyStatusEnum) ToPointer() *UpdateAutomatedDiscoveryConfigurationRequestBodyStatusEnum {
	return &e
}

func (e *UpdateAutomatedDiscoveryConfigurationRequestBodyStatusEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "ENABLED":
		fallthrough
	case "DISABLED":
		*e = UpdateAutomatedDiscoveryConfigurationRequestBodyStatusEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for UpdateAutomatedDiscoveryConfigurationRequestBodyStatusEnum: %v", v)
	}
}

type UpdateAutomatedDiscoveryConfigurationRequestBody struct {
	// The status of the automated sensitive data discovery configuration for an Amazon Macie account. Valid values are:
	Status UpdateAutomatedDiscoveryConfigurationRequestBodyStatusEnum `json:"status"`
}

type UpdateAutomatedDiscoveryConfigurationRequest struct {
	RequestBody       UpdateAutomatedDiscoveryConfigurationRequestBody `request:"mediaType=application/json"`
	XAmzAlgorithm     *string                                          `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                          `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                          `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                          `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                          `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                          `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                          `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type UpdateAutomatedDiscoveryConfigurationResponse struct {
	// AccessDeniedException
	AccessDeniedException interface{}
	ContentType           string
	// InternalServerException
	InternalServerException interface{}
	StatusCode              int
	RawResponse             *http.Response
	// ThrottlingException
	ThrottlingException interface{}
	// Success
	UpdateAutomatedDiscoveryConfigurationResponse map[string]interface{}
	// ValidationException
	ValidationException interface{}
}
