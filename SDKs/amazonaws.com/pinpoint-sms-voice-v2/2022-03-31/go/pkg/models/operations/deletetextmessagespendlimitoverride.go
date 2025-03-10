// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"fmt"
	"net/http"
	"openapi/pkg/models/shared"
)

// DeleteTextMessageSpendLimitOverrideXAmzTargetEnum
type DeleteTextMessageSpendLimitOverrideXAmzTargetEnum string

const (
	DeleteTextMessageSpendLimitOverrideXAmzTargetEnumPinpointSmsVoiceV2DeleteTextMessageSpendLimitOverride DeleteTextMessageSpendLimitOverrideXAmzTargetEnum = "PinpointSMSVoiceV2.DeleteTextMessageSpendLimitOverride"
)

func (e DeleteTextMessageSpendLimitOverrideXAmzTargetEnum) ToPointer() *DeleteTextMessageSpendLimitOverrideXAmzTargetEnum {
	return &e
}

func (e *DeleteTextMessageSpendLimitOverrideXAmzTargetEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "PinpointSMSVoiceV2.DeleteTextMessageSpendLimitOverride":
		*e = DeleteTextMessageSpendLimitOverrideXAmzTargetEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for DeleteTextMessageSpendLimitOverrideXAmzTargetEnum: %v", v)
	}
}

type DeleteTextMessageSpendLimitOverrideRequest struct {
	RequestBody       map[string]interface{}                            `request:"mediaType=application/json"`
	XAmzAlgorithm     *string                                           `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                           `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                           `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                           `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                           `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                           `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                           `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteTextMessageSpendLimitOverrideXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DeleteTextMessageSpendLimitOverrideResponse struct {
	// AccessDeniedException
	AccessDeniedException interface{}
	ContentType           string
	// Success
	DeleteTextMessageSpendLimitOverrideResult *shared.DeleteTextMessageSpendLimitOverrideResult
	// InternalServerException
	InternalServerException interface{}
	StatusCode              int
	RawResponse             *http.Response
	// ThrottlingException
	ThrottlingException interface{}
	// ValidationException
	ValidationException interface{}
}
