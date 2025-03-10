// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"fmt"
	"net/http"
)

// GETCancelUpdateStackActionEnum
type GETCancelUpdateStackActionEnum string

const (
	GETCancelUpdateStackActionEnumCancelUpdateStack GETCancelUpdateStackActionEnum = "CancelUpdateStack"
)

func (e GETCancelUpdateStackActionEnum) ToPointer() *GETCancelUpdateStackActionEnum {
	return &e
}

func (e *GETCancelUpdateStackActionEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "CancelUpdateStack":
		*e = GETCancelUpdateStackActionEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for GETCancelUpdateStackActionEnum: %v", v)
	}
}

// GETCancelUpdateStackVersionEnum
type GETCancelUpdateStackVersionEnum string

const (
	GETCancelUpdateStackVersionEnumTwoThousandAndTen0515 GETCancelUpdateStackVersionEnum = "2010-05-15"
)

func (e GETCancelUpdateStackVersionEnum) ToPointer() *GETCancelUpdateStackVersionEnum {
	return &e
}

func (e *GETCancelUpdateStackVersionEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "2010-05-15":
		*e = GETCancelUpdateStackVersionEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for GETCancelUpdateStackVersionEnum: %v", v)
	}
}

type GETCancelUpdateStackRequest struct {
	Action GETCancelUpdateStackActionEnum `queryParam:"style=form,explode=true,name=Action"`
	// A unique identifier for this <code>CancelUpdateStack</code> request. Specify this token if you plan to retry requests so that CloudFormation knows that you're not attempting to cancel an update on a stack with the same name. You might retry <code>CancelUpdateStack</code> requests to ensure that CloudFormation successfully received them.
	ClientRequestToken *string `queryParam:"style=form,explode=true,name=ClientRequestToken"`
	// The name or the unique stack ID that's associated with the stack.
	StackName         string                          `queryParam:"style=form,explode=true,name=StackName"`
	Version           GETCancelUpdateStackVersionEnum `queryParam:"style=form,explode=true,name=Version"`
	XAmzAlgorithm     *string                         `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GETCancelUpdateStackResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int
	RawResponse *http.Response
}
