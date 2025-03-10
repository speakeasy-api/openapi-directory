// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"fmt"
	"net/http"
)

// POSTModifyEventSubscriptionActionEnum
type POSTModifyEventSubscriptionActionEnum string

const (
	POSTModifyEventSubscriptionActionEnumModifyEventSubscription POSTModifyEventSubscriptionActionEnum = "ModifyEventSubscription"
)

func (e POSTModifyEventSubscriptionActionEnum) ToPointer() *POSTModifyEventSubscriptionActionEnum {
	return &e
}

func (e *POSTModifyEventSubscriptionActionEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "ModifyEventSubscription":
		*e = POSTModifyEventSubscriptionActionEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for POSTModifyEventSubscriptionActionEnum: %v", v)
	}
}

// POSTModifyEventSubscriptionVersionEnum
type POSTModifyEventSubscriptionVersionEnum string

const (
	POSTModifyEventSubscriptionVersionEnumTwoThousandAndFourteen1031 POSTModifyEventSubscriptionVersionEnum = "2014-10-31"
)

func (e POSTModifyEventSubscriptionVersionEnum) ToPointer() *POSTModifyEventSubscriptionVersionEnum {
	return &e
}

func (e *POSTModifyEventSubscriptionVersionEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "2014-10-31":
		*e = POSTModifyEventSubscriptionVersionEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for POSTModifyEventSubscriptionVersionEnum: %v", v)
	}
}

type POSTModifyEventSubscriptionRequest struct {
	Action            POSTModifyEventSubscriptionActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	RequestBody       []byte                                 `request:"mediaType=text/xml"`
	Version           POSTModifyEventSubscriptionVersionEnum `queryParam:"style=form,explode=true,name=Version"`
	XAmzAlgorithm     *string                                `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type POSTModifyEventSubscriptionResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int
	RawResponse *http.Response
}
