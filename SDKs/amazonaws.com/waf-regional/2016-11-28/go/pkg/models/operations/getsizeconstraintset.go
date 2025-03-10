// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"fmt"
	"net/http"
	"openapi/pkg/models/shared"
)

// GetSizeConstraintSetXAmzTargetEnum
type GetSizeConstraintSetXAmzTargetEnum string

const (
	GetSizeConstraintSetXAmzTargetEnumAwswafRegional20161128GetSizeConstraintSet GetSizeConstraintSetXAmzTargetEnum = "AWSWAF_Regional_20161128.GetSizeConstraintSet"
)

func (e GetSizeConstraintSetXAmzTargetEnum) ToPointer() *GetSizeConstraintSetXAmzTargetEnum {
	return &e
}

func (e *GetSizeConstraintSetXAmzTargetEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "AWSWAF_Regional_20161128.GetSizeConstraintSet":
		*e = GetSizeConstraintSetXAmzTargetEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for GetSizeConstraintSetXAmzTargetEnum: %v", v)
	}
}

type GetSizeConstraintSetRequest struct {
	GetSizeConstraintSetRequest shared.GetSizeConstraintSetRequest `request:"mediaType=application/json"`
	XAmzAlgorithm               *string                            `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256           *string                            `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential              *string                            `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate                    *string                            `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken           *string                            `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature               *string                            `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders           *string                            `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget                  GetSizeConstraintSetXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type GetSizeConstraintSetResponse struct {
	ContentType string
	// Success
	GetSizeConstraintSetResponse *shared.GetSizeConstraintSetResponse
	StatusCode                   int
	RawResponse                  *http.Response
	// WAFInternalErrorException
	WAFInternalErrorException interface{}
	// WAFInvalidAccountException
	WAFInvalidAccountException interface{}
	// WAFNonexistentItemException
	WAFNonexistentItemException interface{}
}
