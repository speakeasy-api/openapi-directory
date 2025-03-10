// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
)

type TagResourceRequestBody struct {
	// <p>Applies one or more tags to specific resource. A tag is a key-value pair that helps you manage, identify, search, and filter your resources.</p> <p>Format: <code>"key" : "value"</code> </p> <p>Restrictions:</p> <ul> <li> <p>Maximum 50 tags per resource.</p> </li> <li> <p>Each tag key must be unique and must have exactly one associated value.</p> </li> <li> <p>Maximum key length: 128 Unicode characters in UTF-8.</p> </li> <li> <p>Maximum value length: 256 Unicode characters in UTF-8.</p> </li> <li> <p>Can use alphanumeric characters (A–Z, a–z, 0–9), and the following characters: + - = . _ : / @</p> </li> <li> <p>Cannot use "aws:" as a prefix for a key.</p> </li> </ul>
	Tags map[string]string `json:"Tags"`
}

type TagResourceRequest struct {
	RequestBody TagResourceRequestBody `request:"mediaType=application/json"`
	// <p>The Amazon Resource Name (ARN) of the resource whose tags you want to update.</p> <ul> <li> <p>Format example: <code>arn:aws:geo:region:account-id:resourcetype/ExampleResource</code> </p> </li> </ul>
	ResourceArn       string  `pathParam:"style=simple,explode=false,name=ResourceArn"`
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type TagResourceResponse struct {
	// AccessDeniedException
	AccessDeniedException interface{}
	ContentType           string
	// InternalServerException
	InternalServerException interface{}
	// ResourceNotFoundException
	ResourceNotFoundException interface{}
	StatusCode                int
	RawResponse               *http.Response
	// Success
	TagResourceResponse map[string]interface{}
	// ThrottlingException
	ThrottlingException interface{}
	// ValidationException
	ValidationException interface{}
}
