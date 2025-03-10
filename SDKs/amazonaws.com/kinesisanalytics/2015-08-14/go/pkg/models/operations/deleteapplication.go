// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"fmt"
	"net/http"
	"openapi/pkg/models/shared"
)

// DeleteApplicationXAmzTargetEnum
type DeleteApplicationXAmzTargetEnum string

const (
	DeleteApplicationXAmzTargetEnumKinesisAnalytics20150814DeleteApplication DeleteApplicationXAmzTargetEnum = "KinesisAnalytics_20150814.DeleteApplication"
)

func (e DeleteApplicationXAmzTargetEnum) ToPointer() *DeleteApplicationXAmzTargetEnum {
	return &e
}

func (e *DeleteApplicationXAmzTargetEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "KinesisAnalytics_20150814.DeleteApplication":
		*e = DeleteApplicationXAmzTargetEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for DeleteApplicationXAmzTargetEnum: %v", v)
	}
}

type DeleteApplicationRequest struct {
	DeleteApplicationRequest shared.DeleteApplicationRequest `request:"mediaType=application/json"`
	XAmzAlgorithm            *string                         `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256        *string                         `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential           *string                         `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate                 *string                         `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken        *string                         `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature            *string                         `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders        *string                         `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget               DeleteApplicationXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DeleteApplicationResponse struct {
	// ConcurrentModificationException
	ConcurrentModificationException interface{}
	ContentType                     string
	// Success
	DeleteApplicationResponse map[string]interface{}
	// ResourceInUseException
	ResourceInUseException interface{}
	StatusCode             int
	RawResponse            *http.Response
	// ResourceNotFoundException
	ResourceNotFoundException interface{}
	// UnsupportedOperationException
	UnsupportedOperationException interface{}
}
