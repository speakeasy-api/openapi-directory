// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"fmt"
	"net/http"
	"openapi/pkg/models/shared"
)

// RetryBuildBatchXAmzTargetEnum
type RetryBuildBatchXAmzTargetEnum string

const (
	RetryBuildBatchXAmzTargetEnumCodeBuild20161006RetryBuildBatch RetryBuildBatchXAmzTargetEnum = "CodeBuild_20161006.RetryBuildBatch"
)

func (e RetryBuildBatchXAmzTargetEnum) ToPointer() *RetryBuildBatchXAmzTargetEnum {
	return &e
}

func (e *RetryBuildBatchXAmzTargetEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "CodeBuild_20161006.RetryBuildBatch":
		*e = RetryBuildBatchXAmzTargetEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for RetryBuildBatchXAmzTargetEnum: %v", v)
	}
}

type RetryBuildBatchRequest struct {
	RetryBuildBatchInput shared.RetryBuildBatchInput   `request:"mediaType=application/json"`
	XAmzAlgorithm        *string                       `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256    *string                       `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential       *string                       `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate             *string                       `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken    *string                       `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature        *string                       `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders    *string                       `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget           RetryBuildBatchXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type RetryBuildBatchResponse struct {
	ContentType string
	// InvalidInputException
	InvalidInputException interface{}
	// ResourceNotFoundException
	ResourceNotFoundException interface{}
	// Success
	RetryBuildBatchOutput *shared.RetryBuildBatchOutput
	StatusCode            int
	RawResponse           *http.Response
}
