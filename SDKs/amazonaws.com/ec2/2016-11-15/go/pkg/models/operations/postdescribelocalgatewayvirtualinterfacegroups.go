// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"fmt"
	"net/http"
)

// POSTDescribeLocalGatewayVirtualInterfaceGroupsActionEnum
type POSTDescribeLocalGatewayVirtualInterfaceGroupsActionEnum string

const (
	POSTDescribeLocalGatewayVirtualInterfaceGroupsActionEnumDescribeLocalGatewayVirtualInterfaceGroups POSTDescribeLocalGatewayVirtualInterfaceGroupsActionEnum = "DescribeLocalGatewayVirtualInterfaceGroups"
)

func (e POSTDescribeLocalGatewayVirtualInterfaceGroupsActionEnum) ToPointer() *POSTDescribeLocalGatewayVirtualInterfaceGroupsActionEnum {
	return &e
}

func (e *POSTDescribeLocalGatewayVirtualInterfaceGroupsActionEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "DescribeLocalGatewayVirtualInterfaceGroups":
		*e = POSTDescribeLocalGatewayVirtualInterfaceGroupsActionEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for POSTDescribeLocalGatewayVirtualInterfaceGroupsActionEnum: %v", v)
	}
}

// POSTDescribeLocalGatewayVirtualInterfaceGroupsVersionEnum
type POSTDescribeLocalGatewayVirtualInterfaceGroupsVersionEnum string

const (
	POSTDescribeLocalGatewayVirtualInterfaceGroupsVersionEnumTwoThousandAndSixteen1115 POSTDescribeLocalGatewayVirtualInterfaceGroupsVersionEnum = "2016-11-15"
)

func (e POSTDescribeLocalGatewayVirtualInterfaceGroupsVersionEnum) ToPointer() *POSTDescribeLocalGatewayVirtualInterfaceGroupsVersionEnum {
	return &e
}

func (e *POSTDescribeLocalGatewayVirtualInterfaceGroupsVersionEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "2016-11-15":
		*e = POSTDescribeLocalGatewayVirtualInterfaceGroupsVersionEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for POSTDescribeLocalGatewayVirtualInterfaceGroupsVersionEnum: %v", v)
	}
}

type POSTDescribeLocalGatewayVirtualInterfaceGroupsRequest struct {
	Action POSTDescribeLocalGatewayVirtualInterfaceGroupsActionEnum `queryParam:"style=form,explode=true,name=Action"`
	// Pagination limit
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	// Pagination token
	NextToken         *string                                                   `queryParam:"style=form,explode=true,name=NextToken"`
	RequestBody       []byte                                                    `request:"mediaType=text/xml"`
	Version           POSTDescribeLocalGatewayVirtualInterfaceGroupsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
	XAmzAlgorithm     *string                                                   `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                                   `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                                   `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                                   `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                                   `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                                   `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                                   `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type POSTDescribeLocalGatewayVirtualInterfaceGroupsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int
	RawResponse *http.Response
}
