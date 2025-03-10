// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"fmt"
	"net/http"
)

// POSTDescribeClientVpnTargetNetworksActionEnum
type POSTDescribeClientVpnTargetNetworksActionEnum string

const (
	POSTDescribeClientVpnTargetNetworksActionEnumDescribeClientVpnTargetNetworks POSTDescribeClientVpnTargetNetworksActionEnum = "DescribeClientVpnTargetNetworks"
)

func (e POSTDescribeClientVpnTargetNetworksActionEnum) ToPointer() *POSTDescribeClientVpnTargetNetworksActionEnum {
	return &e
}

func (e *POSTDescribeClientVpnTargetNetworksActionEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "DescribeClientVpnTargetNetworks":
		*e = POSTDescribeClientVpnTargetNetworksActionEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for POSTDescribeClientVpnTargetNetworksActionEnum: %v", v)
	}
}

// POSTDescribeClientVpnTargetNetworksVersionEnum
type POSTDescribeClientVpnTargetNetworksVersionEnum string

const (
	POSTDescribeClientVpnTargetNetworksVersionEnumTwoThousandAndSixteen1115 POSTDescribeClientVpnTargetNetworksVersionEnum = "2016-11-15"
)

func (e POSTDescribeClientVpnTargetNetworksVersionEnum) ToPointer() *POSTDescribeClientVpnTargetNetworksVersionEnum {
	return &e
}

func (e *POSTDescribeClientVpnTargetNetworksVersionEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "2016-11-15":
		*e = POSTDescribeClientVpnTargetNetworksVersionEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for POSTDescribeClientVpnTargetNetworksVersionEnum: %v", v)
	}
}

type POSTDescribeClientVpnTargetNetworksRequest struct {
	Action POSTDescribeClientVpnTargetNetworksActionEnum `queryParam:"style=form,explode=true,name=Action"`
	// Pagination limit
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	// Pagination token
	NextToken         *string                                        `queryParam:"style=form,explode=true,name=NextToken"`
	RequestBody       []byte                                         `request:"mediaType=text/xml"`
	Version           POSTDescribeClientVpnTargetNetworksVersionEnum `queryParam:"style=form,explode=true,name=Version"`
	XAmzAlgorithm     *string                                        `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                        `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                        `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                        `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                        `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                        `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                        `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type POSTDescribeClientVpnTargetNetworksResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int
	RawResponse *http.Response
}
