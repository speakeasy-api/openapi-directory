// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"fmt"
	"net/http"
	"openapi/pkg/models/shared"
)

// CancelMaintenanceWindowExecutionXAmzTargetEnum
type CancelMaintenanceWindowExecutionXAmzTargetEnum string

const (
	CancelMaintenanceWindowExecutionXAmzTargetEnumAmazonSsmCancelMaintenanceWindowExecution CancelMaintenanceWindowExecutionXAmzTargetEnum = "AmazonSSM.CancelMaintenanceWindowExecution"
)

func (e CancelMaintenanceWindowExecutionXAmzTargetEnum) ToPointer() *CancelMaintenanceWindowExecutionXAmzTargetEnum {
	return &e
}

func (e *CancelMaintenanceWindowExecutionXAmzTargetEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "AmazonSSM.CancelMaintenanceWindowExecution":
		*e = CancelMaintenanceWindowExecutionXAmzTargetEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for CancelMaintenanceWindowExecutionXAmzTargetEnum: %v", v)
	}
}

type CancelMaintenanceWindowExecutionRequest struct {
	CancelMaintenanceWindowExecutionRequest shared.CancelMaintenanceWindowExecutionRequest `request:"mediaType=application/json"`
	XAmzAlgorithm                           *string                                        `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256                       *string                                        `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential                          *string                                        `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate                                *string                                        `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken                       *string                                        `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature                           *string                                        `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders                       *string                                        `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget                              CancelMaintenanceWindowExecutionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type CancelMaintenanceWindowExecutionResponse struct {
	// Success
	CancelMaintenanceWindowExecutionResult *shared.CancelMaintenanceWindowExecutionResult
	ContentType                            string
	// DoesNotExistException
	DoesNotExistException interface{}
	// InternalServerError
	InternalServerError interface{}
	StatusCode          int
	RawResponse         *http.Response
}
