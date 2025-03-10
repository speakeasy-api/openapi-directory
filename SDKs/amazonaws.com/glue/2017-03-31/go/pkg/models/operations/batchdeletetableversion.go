// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"fmt"
	"net/http"
	"openapi/pkg/models/shared"
)

// BatchDeleteTableVersionXAmzTargetEnum
type BatchDeleteTableVersionXAmzTargetEnum string

const (
	BatchDeleteTableVersionXAmzTargetEnumAwsGlueBatchDeleteTableVersion BatchDeleteTableVersionXAmzTargetEnum = "AWSGlue.BatchDeleteTableVersion"
)

func (e BatchDeleteTableVersionXAmzTargetEnum) ToPointer() *BatchDeleteTableVersionXAmzTargetEnum {
	return &e
}

func (e *BatchDeleteTableVersionXAmzTargetEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "AWSGlue.BatchDeleteTableVersion":
		*e = BatchDeleteTableVersionXAmzTargetEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for BatchDeleteTableVersionXAmzTargetEnum: %v", v)
	}
}

type BatchDeleteTableVersionRequest struct {
	BatchDeleteTableVersionRequest shared.BatchDeleteTableVersionRequest `request:"mediaType=application/json"`
	XAmzAlgorithm                  *string                               `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256              *string                               `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential                 *string                               `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate                       *string                               `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken              *string                               `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature                  *string                               `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders              *string                               `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget                     BatchDeleteTableVersionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type BatchDeleteTableVersionResponse struct {
	// Success
	BatchDeleteTableVersionResponse *shared.BatchDeleteTableVersionResponse
	ContentType                     string
	// EntityNotFoundException
	EntityNotFoundException interface{}
	// InternalServiceException
	InternalServiceException interface{}
	// InvalidInputException
	InvalidInputException interface{}
	// OperationTimeoutException
	OperationTimeoutException interface{}
	StatusCode                int
	RawResponse               *http.Response
}
