// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"fmt"
	"net/http"
)

// GETStopActivityStreamActionEnum
type GETStopActivityStreamActionEnum string

const (
	GETStopActivityStreamActionEnumStopActivityStream GETStopActivityStreamActionEnum = "StopActivityStream"
)

func (e GETStopActivityStreamActionEnum) ToPointer() *GETStopActivityStreamActionEnum {
	return &e
}

func (e *GETStopActivityStreamActionEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "StopActivityStream":
		*e = GETStopActivityStreamActionEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for GETStopActivityStreamActionEnum: %v", v)
	}
}

// GETStopActivityStreamVersionEnum
type GETStopActivityStreamVersionEnum string

const (
	GETStopActivityStreamVersionEnumTwoThousandAndFourteen1031 GETStopActivityStreamVersionEnum = "2014-10-31"
)

func (e GETStopActivityStreamVersionEnum) ToPointer() *GETStopActivityStreamVersionEnum {
	return &e
}

func (e *GETStopActivityStreamVersionEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "2014-10-31":
		*e = GETStopActivityStreamVersionEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for GETStopActivityStreamVersionEnum: %v", v)
	}
}

type GETStopActivityStreamRequest struct {
	Action GETStopActivityStreamActionEnum `queryParam:"style=form,explode=true,name=Action"`
	// Specifies whether or not the database activity stream is to stop as soon as possible, regardless of the maintenance window for the database.
	ApplyImmediately *bool `queryParam:"style=form,explode=true,name=ApplyImmediately"`
	// The Amazon Resource Name (ARN) of the DB cluster for the database activity stream. For example, <code>arn:aws:rds:us-east-1:12345667890:cluster:das-cluster</code>.
	ResourceArn       string                           `queryParam:"style=form,explode=true,name=ResourceArn"`
	Version           GETStopActivityStreamVersionEnum `queryParam:"style=form,explode=true,name=Version"`
	XAmzAlgorithm     *string                          `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GETStopActivityStreamResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int
	RawResponse *http.Response
}
