// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"fmt"
	"net/http"
	"openapi/pkg/models/shared"
)

// CreateTypeRequestBodyFormatEnum - The type format: SDL or JSON.
type CreateTypeRequestBodyFormatEnum string

const (
	CreateTypeRequestBodyFormatEnumSdl  CreateTypeRequestBodyFormatEnum = "SDL"
	CreateTypeRequestBodyFormatEnumJSON CreateTypeRequestBodyFormatEnum = "JSON"
)

func (e CreateTypeRequestBodyFormatEnum) ToPointer() *CreateTypeRequestBodyFormatEnum {
	return &e
}

func (e *CreateTypeRequestBodyFormatEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "SDL":
		fallthrough
	case "JSON":
		*e = CreateTypeRequestBodyFormatEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for CreateTypeRequestBodyFormatEnum: %v", v)
	}
}

type CreateTypeRequestBody struct {
	// <p>The type definition, in GraphQL Schema Definition Language (SDL) format.</p> <p>For more information, see the <a href="http://graphql.org/learn/schema/">GraphQL SDL documentation</a>.</p>
	Definition string `json:"definition"`
	// The type format: SDL or JSON.
	Format CreateTypeRequestBodyFormatEnum `json:"format"`
}

type CreateTypeRequest struct {
	RequestBody       CreateTypeRequestBody `request:"mediaType=application/json"`
	XAmzAlgorithm     *string               `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string               `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string               `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string               `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string               `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string               `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string               `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	// The API ID.
	APIID string `pathParam:"style=simple,explode=false,name=apiId"`
}

type CreateTypeResponse struct {
	// BadRequestException
	BadRequestException interface{}
	// ConcurrentModificationException
	ConcurrentModificationException interface{}
	ContentType                     string
	// Success
	CreateTypeResponse *shared.CreateTypeResponse
	// InternalFailureException
	InternalFailureException interface{}
	// NotFoundException
	NotFoundException interface{}
	StatusCode        int
	RawResponse       *http.Response
	// UnauthorizedException
	UnauthorizedException interface{}
}
