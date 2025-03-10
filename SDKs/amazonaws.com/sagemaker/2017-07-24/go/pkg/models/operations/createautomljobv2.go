// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"fmt"
	"net/http"
	"openapi/pkg/models/shared"
)

// CreateAutoMLJobV2XAmzTargetEnum
type CreateAutoMLJobV2XAmzTargetEnum string

const (
	CreateAutoMLJobV2XAmzTargetEnumSageMakerCreateAutoMlJobV2 CreateAutoMLJobV2XAmzTargetEnum = "SageMaker.CreateAutoMLJobV2"
)

func (e CreateAutoMLJobV2XAmzTargetEnum) ToPointer() *CreateAutoMLJobV2XAmzTargetEnum {
	return &e
}

func (e *CreateAutoMLJobV2XAmzTargetEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "SageMaker.CreateAutoMLJobV2":
		*e = CreateAutoMLJobV2XAmzTargetEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for CreateAutoMLJobV2XAmzTargetEnum: %v", v)
	}
}

type CreateAutoMLJobV2Request struct {
	CreateAutoMLJobV2Request shared.CreateAutoMLJobV2Request `request:"mediaType=application/json"`
	XAmzAlgorithm            *string                         `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256        *string                         `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential           *string                         `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate                 *string                         `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken        *string                         `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature            *string                         `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders        *string                         `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget               CreateAutoMLJobV2XAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type CreateAutoMLJobV2Response struct {
	ContentType string
	// Success
	CreateAutoMLJobV2Response *shared.CreateAutoMLJobV2Response
	// ResourceInUse
	ResourceInUse interface{}
	StatusCode    int
	RawResponse   *http.Response
	// ResourceLimitExceeded
	ResourceLimitExceeded interface{}
}
