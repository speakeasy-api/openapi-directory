// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"fmt"
	"net/http"
	"openapi/pkg/models/shared"
)

// GetDatabaseXAmzTargetEnum
type GetDatabaseXAmzTargetEnum string

const (
	GetDatabaseXAmzTargetEnumAmazonAthenaGetDatabase GetDatabaseXAmzTargetEnum = "AmazonAthena.GetDatabase"
)

func (e GetDatabaseXAmzTargetEnum) ToPointer() *GetDatabaseXAmzTargetEnum {
	return &e
}

func (e *GetDatabaseXAmzTargetEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "AmazonAthena.GetDatabase":
		*e = GetDatabaseXAmzTargetEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for GetDatabaseXAmzTargetEnum: %v", v)
	}
}

type GetDatabaseRequest struct {
	GetDatabaseInput  shared.GetDatabaseInput   `request:"mediaType=application/json"`
	XAmzAlgorithm     *string                   `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                   `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                   `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                   `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                   `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                   `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                   `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetDatabaseXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type GetDatabaseResponse struct {
	ContentType string
	// Success
	GetDatabaseOutput *shared.GetDatabaseOutput
	// InternalServerException
	InternalServerException interface{}
	// InvalidRequestException
	InvalidRequestException interface{}
	// MetadataException
	MetadataException interface{}
	StatusCode        int
	RawResponse       *http.Response
}
