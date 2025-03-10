// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"fmt"
	"net/http"
)

// GETGETEbsEncryptionByDefaultActionEnum
type GETGETEbsEncryptionByDefaultActionEnum string

const (
	GETGETEbsEncryptionByDefaultActionEnumGetEbsEncryptionByDefault GETGETEbsEncryptionByDefaultActionEnum = "GetEbsEncryptionByDefault"
)

func (e GETGETEbsEncryptionByDefaultActionEnum) ToPointer() *GETGETEbsEncryptionByDefaultActionEnum {
	return &e
}

func (e *GETGETEbsEncryptionByDefaultActionEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "GetEbsEncryptionByDefault":
		*e = GETGETEbsEncryptionByDefaultActionEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for GETGETEbsEncryptionByDefaultActionEnum: %v", v)
	}
}

// GETGETEbsEncryptionByDefaultVersionEnum
type GETGETEbsEncryptionByDefaultVersionEnum string

const (
	GETGETEbsEncryptionByDefaultVersionEnumTwoThousandAndSixteen1115 GETGETEbsEncryptionByDefaultVersionEnum = "2016-11-15"
)

func (e GETGETEbsEncryptionByDefaultVersionEnum) ToPointer() *GETGETEbsEncryptionByDefaultVersionEnum {
	return &e
}

func (e *GETGETEbsEncryptionByDefaultVersionEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "2016-11-15":
		*e = GETGETEbsEncryptionByDefaultVersionEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for GETGETEbsEncryptionByDefaultVersionEnum: %v", v)
	}
}

type GETGETEbsEncryptionByDefaultRequest struct {
	Action GETGETEbsEncryptionByDefaultActionEnum `queryParam:"style=form,explode=true,name=Action"`
	// Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.
	DryRun            *bool                                   `queryParam:"style=form,explode=true,name=DryRun"`
	Version           GETGETEbsEncryptionByDefaultVersionEnum `queryParam:"style=form,explode=true,name=Version"`
	XAmzAlgorithm     *string                                 `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                 `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                 `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                 `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                 `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                 `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                 `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GETGETEbsEncryptionByDefaultResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int
	RawResponse *http.Response
}
