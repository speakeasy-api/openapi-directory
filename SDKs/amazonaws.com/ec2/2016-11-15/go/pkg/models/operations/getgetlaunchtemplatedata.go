// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"fmt"
	"net/http"
)

// GETGETLaunchTemplateDataActionEnum
type GETGETLaunchTemplateDataActionEnum string

const (
	GETGETLaunchTemplateDataActionEnumGetLaunchTemplateData GETGETLaunchTemplateDataActionEnum = "GetLaunchTemplateData"
)

func (e GETGETLaunchTemplateDataActionEnum) ToPointer() *GETGETLaunchTemplateDataActionEnum {
	return &e
}

func (e *GETGETLaunchTemplateDataActionEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "GetLaunchTemplateData":
		*e = GETGETLaunchTemplateDataActionEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for GETGETLaunchTemplateDataActionEnum: %v", v)
	}
}

// GETGETLaunchTemplateDataVersionEnum
type GETGETLaunchTemplateDataVersionEnum string

const (
	GETGETLaunchTemplateDataVersionEnumTwoThousandAndSixteen1115 GETGETLaunchTemplateDataVersionEnum = "2016-11-15"
)

func (e GETGETLaunchTemplateDataVersionEnum) ToPointer() *GETGETLaunchTemplateDataVersionEnum {
	return &e
}

func (e *GETGETLaunchTemplateDataVersionEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "2016-11-15":
		*e = GETGETLaunchTemplateDataVersionEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for GETGETLaunchTemplateDataVersionEnum: %v", v)
	}
}

type GETGETLaunchTemplateDataRequest struct {
	Action GETGETLaunchTemplateDataActionEnum `queryParam:"style=form,explode=true,name=Action"`
	// Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.
	DryRun *bool `queryParam:"style=form,explode=true,name=DryRun"`
	// The ID of the instance.
	InstanceID        string                              `queryParam:"style=form,explode=true,name=InstanceId"`
	Version           GETGETLaunchTemplateDataVersionEnum `queryParam:"style=form,explode=true,name=Version"`
	XAmzAlgorithm     *string                             `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GETGETLaunchTemplateDataResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int
	RawResponse *http.Response
}
