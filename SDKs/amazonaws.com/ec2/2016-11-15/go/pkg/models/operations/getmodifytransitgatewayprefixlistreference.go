// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"fmt"
	"net/http"
)

// GETModifyTransitGatewayPrefixListReferenceActionEnum
type GETModifyTransitGatewayPrefixListReferenceActionEnum string

const (
	GETModifyTransitGatewayPrefixListReferenceActionEnumModifyTransitGatewayPrefixListReference GETModifyTransitGatewayPrefixListReferenceActionEnum = "ModifyTransitGatewayPrefixListReference"
)

func (e GETModifyTransitGatewayPrefixListReferenceActionEnum) ToPointer() *GETModifyTransitGatewayPrefixListReferenceActionEnum {
	return &e
}

func (e *GETModifyTransitGatewayPrefixListReferenceActionEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "ModifyTransitGatewayPrefixListReference":
		*e = GETModifyTransitGatewayPrefixListReferenceActionEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for GETModifyTransitGatewayPrefixListReferenceActionEnum: %v", v)
	}
}

// GETModifyTransitGatewayPrefixListReferenceVersionEnum
type GETModifyTransitGatewayPrefixListReferenceVersionEnum string

const (
	GETModifyTransitGatewayPrefixListReferenceVersionEnumTwoThousandAndSixteen1115 GETModifyTransitGatewayPrefixListReferenceVersionEnum = "2016-11-15"
)

func (e GETModifyTransitGatewayPrefixListReferenceVersionEnum) ToPointer() *GETModifyTransitGatewayPrefixListReferenceVersionEnum {
	return &e
}

func (e *GETModifyTransitGatewayPrefixListReferenceVersionEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "2016-11-15":
		*e = GETModifyTransitGatewayPrefixListReferenceVersionEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for GETModifyTransitGatewayPrefixListReferenceVersionEnum: %v", v)
	}
}

type GETModifyTransitGatewayPrefixListReferenceRequest struct {
	Action GETModifyTransitGatewayPrefixListReferenceActionEnum `queryParam:"style=form,explode=true,name=Action"`
	// Indicates whether to drop traffic that matches this route.
	Blackhole *bool `queryParam:"style=form,explode=true,name=Blackhole"`
	// Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.
	DryRun *bool `queryParam:"style=form,explode=true,name=DryRun"`
	// The ID of the prefix list.
	PrefixListID string `queryParam:"style=form,explode=true,name=PrefixListId"`
	// The ID of the attachment to which traffic is routed.
	TransitGatewayAttachmentID *string `queryParam:"style=form,explode=true,name=TransitGatewayAttachmentId"`
	// The ID of the transit gateway route table.
	TransitGatewayRouteTableID string                                                `queryParam:"style=form,explode=true,name=TransitGatewayRouteTableId"`
	Version                    GETModifyTransitGatewayPrefixListReferenceVersionEnum `queryParam:"style=form,explode=true,name=Version"`
	XAmzAlgorithm              *string                                               `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256          *string                                               `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential             *string                                               `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate                   *string                                               `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken          *string                                               `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature              *string                                               `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders          *string                                               `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GETModifyTransitGatewayPrefixListReferenceResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int
	RawResponse *http.Response
}
