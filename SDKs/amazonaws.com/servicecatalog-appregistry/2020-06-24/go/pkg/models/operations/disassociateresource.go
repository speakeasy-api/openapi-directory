// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"fmt"
	"net/http"
	"openapi/pkg/models/shared"
)

// DisassociateResourceResourceTypeEnum - The type of the resource that is being disassociated.
type DisassociateResourceResourceTypeEnum string

const (
	DisassociateResourceResourceTypeEnumCfnStack         DisassociateResourceResourceTypeEnum = "CFN_STACK"
	DisassociateResourceResourceTypeEnumResourceTagValue DisassociateResourceResourceTypeEnum = "RESOURCE_TAG_VALUE"
)

func (e DisassociateResourceResourceTypeEnum) ToPointer() *DisassociateResourceResourceTypeEnum {
	return &e
}

func (e *DisassociateResourceResourceTypeEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "CFN_STACK":
		fallthrough
	case "RESOURCE_TAG_VALUE":
		*e = DisassociateResourceResourceTypeEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for DisassociateResourceResourceTypeEnum: %v", v)
	}
}

type DisassociateResourceRequest struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	// The name or ID of the application.
	Application string `pathParam:"style=simple,explode=false,name=application"`
	// The name or ID of the resource.
	Resource string `pathParam:"style=simple,explode=false,name=resource"`
	// The type of the resource that is being disassociated.
	ResourceType DisassociateResourceResourceTypeEnum `pathParam:"style=simple,explode=false,name=resourceType"`
}

type DisassociateResourceResponse struct {
	ContentType string
	// Success
	DisassociateResourceResponse *shared.DisassociateResourceResponse
	// InternalServerException
	InternalServerException interface{}
	// ResourceNotFoundException
	ResourceNotFoundException interface{}
	StatusCode                int
	RawResponse               *http.Response
	// ThrottlingException
	ThrottlingException interface{}
	// ValidationException
	ValidationException interface{}
}
