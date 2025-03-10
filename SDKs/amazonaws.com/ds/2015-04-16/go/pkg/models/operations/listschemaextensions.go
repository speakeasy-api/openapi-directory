// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"fmt"
	"net/http"
	"openapi/pkg/models/shared"
)

// ListSchemaExtensionsXAmzTargetEnum
type ListSchemaExtensionsXAmzTargetEnum string

const (
	ListSchemaExtensionsXAmzTargetEnumDirectoryService20150416ListSchemaExtensions ListSchemaExtensionsXAmzTargetEnum = "DirectoryService_20150416.ListSchemaExtensions"
)

func (e ListSchemaExtensionsXAmzTargetEnum) ToPointer() *ListSchemaExtensionsXAmzTargetEnum {
	return &e
}

func (e *ListSchemaExtensionsXAmzTargetEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "DirectoryService_20150416.ListSchemaExtensions":
		*e = ListSchemaExtensionsXAmzTargetEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for ListSchemaExtensionsXAmzTargetEnum: %v", v)
	}
}

type ListSchemaExtensionsRequest struct {
	// Pagination limit
	Limit                       *string                            `queryParam:"style=form,explode=true,name=Limit"`
	ListSchemaExtensionsRequest shared.ListSchemaExtensionsRequest `request:"mediaType=application/json"`
	// Pagination token
	NextToken         *string                            `queryParam:"style=form,explode=true,name=NextToken"`
	XAmzAlgorithm     *string                            `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListSchemaExtensionsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type ListSchemaExtensionsResponse struct {
	// ClientException
	ClientException interface{}
	ContentType     string
	// EntityDoesNotExistException
	EntityDoesNotExistException interface{}
	// InvalidNextTokenException
	InvalidNextTokenException interface{}
	// Success
	ListSchemaExtensionsResult *shared.ListSchemaExtensionsResult
	// ServiceException
	ServiceException interface{}
	StatusCode       int
	RawResponse      *http.Response
}
