// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"fmt"
	"net/http"
	"openapi/pkg/models/shared"
)

// DescribeAcceleratorOfferingsRequestBodyLocationTypeEnum -  The location type that you want to describe accelerator type offerings for. It can assume the following values: region: will return the accelerator type offering at the regional level. availability-zone: will return the accelerator type offering at the availability zone level. availability-zone-id: will return the accelerator type offering at the availability zone level returning the availability zone id.
type DescribeAcceleratorOfferingsRequestBodyLocationTypeEnum string

const (
	DescribeAcceleratorOfferingsRequestBodyLocationTypeEnumRegion             DescribeAcceleratorOfferingsRequestBodyLocationTypeEnum = "region"
	DescribeAcceleratorOfferingsRequestBodyLocationTypeEnumAvailabilityZone   DescribeAcceleratorOfferingsRequestBodyLocationTypeEnum = "availability-zone"
	DescribeAcceleratorOfferingsRequestBodyLocationTypeEnumAvailabilityZoneID DescribeAcceleratorOfferingsRequestBodyLocationTypeEnum = "availability-zone-id"
)

func (e DescribeAcceleratorOfferingsRequestBodyLocationTypeEnum) ToPointer() *DescribeAcceleratorOfferingsRequestBodyLocationTypeEnum {
	return &e
}

func (e *DescribeAcceleratorOfferingsRequestBodyLocationTypeEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "region":
		fallthrough
	case "availability-zone":
		fallthrough
	case "availability-zone-id":
		*e = DescribeAcceleratorOfferingsRequestBodyLocationTypeEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for DescribeAcceleratorOfferingsRequestBodyLocationTypeEnum: %v", v)
	}
}

type DescribeAcceleratorOfferingsRequestBody struct {
	//  The list of accelerator types to describe.
	AcceleratorTypes []string `json:"acceleratorTypes,omitempty"`
	//  The location type that you want to describe accelerator type offerings for. It can assume the following values: region: will return the accelerator type offering at the regional level. availability-zone: will return the accelerator type offering at the availability zone level. availability-zone-id: will return the accelerator type offering at the availability zone level returning the availability zone id.
	LocationType DescribeAcceleratorOfferingsRequestBodyLocationTypeEnum `json:"locationType"`
}

type DescribeAcceleratorOfferingsRequest struct {
	RequestBody       DescribeAcceleratorOfferingsRequestBody `request:"mediaType=application/json"`
	XAmzAlgorithm     *string                                 `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                 `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                 `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                 `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                 `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                 `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                 `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type DescribeAcceleratorOfferingsResponse struct {
	// BadRequestException
	BadRequestException interface{}
	ContentType         string
	// Success
	DescribeAcceleratorOfferingsResponse *shared.DescribeAcceleratorOfferingsResponse
	// InternalServerException
	InternalServerException interface{}
	StatusCode              int
	RawResponse             *http.Response
	// ResourceNotFoundException
	ResourceNotFoundException interface{}
}
