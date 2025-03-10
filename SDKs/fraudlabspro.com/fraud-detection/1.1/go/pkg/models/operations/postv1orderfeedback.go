// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"fmt"
	"net/http"
)

// PostV1OrderFeedbackActionEnum
type PostV1OrderFeedbackActionEnum string

const (
	PostV1OrderFeedbackActionEnumApprove         PostV1OrderFeedbackActionEnum = "APPROVE"
	PostV1OrderFeedbackActionEnumReject          PostV1OrderFeedbackActionEnum = "REJECT"
	PostV1OrderFeedbackActionEnumRejectBlacklist PostV1OrderFeedbackActionEnum = "REJECT_BLACKLIST"
)

func (e PostV1OrderFeedbackActionEnum) ToPointer() *PostV1OrderFeedbackActionEnum {
	return &e
}

func (e *PostV1OrderFeedbackActionEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "APPROVE":
		fallthrough
	case "REJECT":
		fallthrough
	case "REJECT_BLACKLIST":
		*e = PostV1OrderFeedbackActionEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for PostV1OrderFeedbackActionEnum: %v", v)
	}
}

// PostV1OrderFeedbackFormatEnum
type PostV1OrderFeedbackFormatEnum string

const (
	PostV1OrderFeedbackFormatEnumJSON PostV1OrderFeedbackFormatEnum = "json"
	PostV1OrderFeedbackFormatEnumXML  PostV1OrderFeedbackFormatEnum = "xml"
)

func (e PostV1OrderFeedbackFormatEnum) ToPointer() *PostV1OrderFeedbackFormatEnum {
	return &e
}

func (e *PostV1OrderFeedbackFormatEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "json":
		fallthrough
	case "xml":
		*e = PostV1OrderFeedbackFormatEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for PostV1OrderFeedbackFormatEnum: %v", v)
	}
}

type PostV1OrderFeedbackRequest struct {
	Action PostV1OrderFeedbackActionEnum  `queryParam:"style=form,explode=true,name=action"`
	Format *PostV1OrderFeedbackFormatEnum `queryParam:"style=form,explode=true,name=format"`
	ID     string                         `queryParam:"style=form,explode=true,name=id"`
	Key    string                         `queryParam:"style=form,explode=true,name=key"`
	Notes  *string                        `queryParam:"style=form,explode=true,name=notes"`
}

type PostV1OrderFeedbackResponse struct {
	ContentType string
	StatusCode  int
	RawResponse *http.Response
	// Feedback order response
	PostV1OrderFeedback200ApplicationJSONString *string
}
