// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"fmt"
	"net/http"
	"openapi/pkg/models/shared"
)

// GetDefaultPatchBaselineXAmzTargetEnum
type GetDefaultPatchBaselineXAmzTargetEnum string

const (
	GetDefaultPatchBaselineXAmzTargetEnumAmazonSsmGetDefaultPatchBaseline GetDefaultPatchBaselineXAmzTargetEnum = "AmazonSSM.GetDefaultPatchBaseline"
)

func (e GetDefaultPatchBaselineXAmzTargetEnum) ToPointer() *GetDefaultPatchBaselineXAmzTargetEnum {
	return &e
}

func (e *GetDefaultPatchBaselineXAmzTargetEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "AmazonSSM.GetDefaultPatchBaseline":
		*e = GetDefaultPatchBaselineXAmzTargetEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for GetDefaultPatchBaselineXAmzTargetEnum: %v", v)
	}
}

type GetDefaultPatchBaselineRequest struct {
	GetDefaultPatchBaselineRequest shared.GetDefaultPatchBaselineRequest `request:"mediaType=application/json"`
	XAmzAlgorithm                  *string                               `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256              *string                               `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential                 *string                               `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate                       *string                               `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken              *string                               `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature                  *string                               `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders              *string                               `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget                     GetDefaultPatchBaselineXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type GetDefaultPatchBaselineResponse struct {
	ContentType string
	// Success
	GetDefaultPatchBaselineResult *shared.GetDefaultPatchBaselineResult
	// InternalServerError
	InternalServerError interface{}
	StatusCode          int
	RawResponse         *http.Response
}
