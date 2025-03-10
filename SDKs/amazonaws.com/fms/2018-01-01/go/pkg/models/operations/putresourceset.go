// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"fmt"
	"net/http"
	"openapi/pkg/models/shared"
)

// PutResourceSetXAmzTargetEnum
type PutResourceSetXAmzTargetEnum string

const (
	PutResourceSetXAmzTargetEnumAwsfms20180101PutResourceSet PutResourceSetXAmzTargetEnum = "AWSFMS_20180101.PutResourceSet"
)

func (e PutResourceSetXAmzTargetEnum) ToPointer() *PutResourceSetXAmzTargetEnum {
	return &e
}

func (e *PutResourceSetXAmzTargetEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "AWSFMS_20180101.PutResourceSet":
		*e = PutResourceSetXAmzTargetEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for PutResourceSetXAmzTargetEnum: %v", v)
	}
}

type PutResourceSetRequest struct {
	PutResourceSetRequest shared.PutResourceSetRequest `request:"mediaType=application/json"`
	XAmzAlgorithm         *string                      `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256     *string                      `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential        *string                      `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate              *string                      `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken     *string                      `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature         *string                      `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders     *string                      `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget            PutResourceSetXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type PutResourceSetResponse struct {
	ContentType string
	// InternalErrorException
	InternalErrorException interface{}
	// InvalidInputException
	InvalidInputException interface{}
	// InvalidOperationException
	InvalidOperationException interface{}
	// LimitExceededException
	LimitExceededException interface{}
	// Success
	PutResourceSetResponse *shared.PutResourceSetResponse
	StatusCode             int
	RawResponse            *http.Response
}
