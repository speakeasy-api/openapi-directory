// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"fmt"
	"net/http"
)

// POSTRemoveSourceIdentifierFromSubscriptionActionEnum
type POSTRemoveSourceIdentifierFromSubscriptionActionEnum string

const (
	POSTRemoveSourceIdentifierFromSubscriptionActionEnumRemoveSourceIdentifierFromSubscription POSTRemoveSourceIdentifierFromSubscriptionActionEnum = "RemoveSourceIdentifierFromSubscription"
)

func (e POSTRemoveSourceIdentifierFromSubscriptionActionEnum) ToPointer() *POSTRemoveSourceIdentifierFromSubscriptionActionEnum {
	return &e
}

func (e *POSTRemoveSourceIdentifierFromSubscriptionActionEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "RemoveSourceIdentifierFromSubscription":
		*e = POSTRemoveSourceIdentifierFromSubscriptionActionEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for POSTRemoveSourceIdentifierFromSubscriptionActionEnum: %v", v)
	}
}

// POSTRemoveSourceIdentifierFromSubscriptionVersionEnum
type POSTRemoveSourceIdentifierFromSubscriptionVersionEnum string

const (
	POSTRemoveSourceIdentifierFromSubscriptionVersionEnumTwoThousandAndFourteen0901 POSTRemoveSourceIdentifierFromSubscriptionVersionEnum = "2014-09-01"
)

func (e POSTRemoveSourceIdentifierFromSubscriptionVersionEnum) ToPointer() *POSTRemoveSourceIdentifierFromSubscriptionVersionEnum {
	return &e
}

func (e *POSTRemoveSourceIdentifierFromSubscriptionVersionEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "2014-09-01":
		*e = POSTRemoveSourceIdentifierFromSubscriptionVersionEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for POSTRemoveSourceIdentifierFromSubscriptionVersionEnum: %v", v)
	}
}

type POSTRemoveSourceIdentifierFromSubscriptionRequest struct {
	Action            POSTRemoveSourceIdentifierFromSubscriptionActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	RequestBody       []byte                                                `request:"mediaType=text/xml"`
	Version           POSTRemoveSourceIdentifierFromSubscriptionVersionEnum `queryParam:"style=form,explode=true,name=Version"`
	XAmzAlgorithm     *string                                               `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                               `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                               `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                               `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                               `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                               `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                               `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type POSTRemoveSourceIdentifierFromSubscriptionResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int
	RawResponse *http.Response
}
