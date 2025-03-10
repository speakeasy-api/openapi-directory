// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"fmt"
	"net/http"
	"openapi/pkg/models/shared"
)

// AssociatePersonasToEntitiesXAmzTargetEnum
type AssociatePersonasToEntitiesXAmzTargetEnum string

const (
	AssociatePersonasToEntitiesXAmzTargetEnumAwsKendraFrontendServiceAssociatePersonasToEntities AssociatePersonasToEntitiesXAmzTargetEnum = "AWSKendraFrontendService.AssociatePersonasToEntities"
)

func (e AssociatePersonasToEntitiesXAmzTargetEnum) ToPointer() *AssociatePersonasToEntitiesXAmzTargetEnum {
	return &e
}

func (e *AssociatePersonasToEntitiesXAmzTargetEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "AWSKendraFrontendService.AssociatePersonasToEntities":
		*e = AssociatePersonasToEntitiesXAmzTargetEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for AssociatePersonasToEntitiesXAmzTargetEnum: %v", v)
	}
}

type AssociatePersonasToEntitiesRequest struct {
	AssociatePersonasToEntitiesRequest shared.AssociatePersonasToEntitiesRequest `request:"mediaType=application/json"`
	XAmzAlgorithm                      *string                                   `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256                  *string                                   `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential                     *string                                   `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate                           *string                                   `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken                  *string                                   `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature                      *string                                   `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders                  *string                                   `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget                         AssociatePersonasToEntitiesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type AssociatePersonasToEntitiesResponse struct {
	// AccessDeniedException
	AccessDeniedException interface{}
	// Success
	AssociatePersonasToEntitiesResponse *shared.AssociatePersonasToEntitiesResponse
	ContentType                         string
	// InternalServerException
	InternalServerException interface{}
	// ResourceAlreadyExistException
	ResourceAlreadyExistException interface{}
	// ResourceNotFoundException
	ResourceNotFoundException interface{}
	StatusCode                int
	RawResponse               *http.Response
	// ThrottlingException
	ThrottlingException interface{}
	// ValidationException
	ValidationException interface{}
}
