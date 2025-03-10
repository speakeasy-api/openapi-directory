// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"fmt"
	"net/http"
)

// GETDetachLoadBalancerTargetGroupsActionEnum
type GETDetachLoadBalancerTargetGroupsActionEnum string

const (
	GETDetachLoadBalancerTargetGroupsActionEnumDetachLoadBalancerTargetGroups GETDetachLoadBalancerTargetGroupsActionEnum = "DetachLoadBalancerTargetGroups"
)

func (e GETDetachLoadBalancerTargetGroupsActionEnum) ToPointer() *GETDetachLoadBalancerTargetGroupsActionEnum {
	return &e
}

func (e *GETDetachLoadBalancerTargetGroupsActionEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "DetachLoadBalancerTargetGroups":
		*e = GETDetachLoadBalancerTargetGroupsActionEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for GETDetachLoadBalancerTargetGroupsActionEnum: %v", v)
	}
}

// GETDetachLoadBalancerTargetGroupsVersionEnum
type GETDetachLoadBalancerTargetGroupsVersionEnum string

const (
	GETDetachLoadBalancerTargetGroupsVersionEnumTwoThousandAndEleven0101 GETDetachLoadBalancerTargetGroupsVersionEnum = "2011-01-01"
)

func (e GETDetachLoadBalancerTargetGroupsVersionEnum) ToPointer() *GETDetachLoadBalancerTargetGroupsVersionEnum {
	return &e
}

func (e *GETDetachLoadBalancerTargetGroupsVersionEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "2011-01-01":
		*e = GETDetachLoadBalancerTargetGroupsVersionEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for GETDetachLoadBalancerTargetGroupsVersionEnum: %v", v)
	}
}

type GETDetachLoadBalancerTargetGroupsRequest struct {
	Action GETDetachLoadBalancerTargetGroupsActionEnum `queryParam:"style=form,explode=true,name=Action"`
	// The name of the Auto Scaling group.
	AutoScalingGroupName string `queryParam:"style=form,explode=true,name=AutoScalingGroupName"`
	// The Amazon Resource Names (ARN) of the target groups. You can specify up to 10 target groups.
	TargetGroupARNs   []string                                     `queryParam:"style=form,explode=true,name=TargetGroupARNs"`
	Version           GETDetachLoadBalancerTargetGroupsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
	XAmzAlgorithm     *string                                      `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                      `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                      `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                      `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                      `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                      `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                      `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GETDetachLoadBalancerTargetGroupsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int
	RawResponse *http.Response
}
