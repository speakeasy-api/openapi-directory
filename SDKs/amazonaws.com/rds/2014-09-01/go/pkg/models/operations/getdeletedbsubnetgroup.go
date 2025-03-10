// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"fmt"
	"net/http"
)

// GETDeleteDBSubnetGroupActionEnum
type GETDeleteDBSubnetGroupActionEnum string

const (
	GETDeleteDBSubnetGroupActionEnumDeleteDbSubnetGroup GETDeleteDBSubnetGroupActionEnum = "DeleteDBSubnetGroup"
)

func (e GETDeleteDBSubnetGroupActionEnum) ToPointer() *GETDeleteDBSubnetGroupActionEnum {
	return &e
}

func (e *GETDeleteDBSubnetGroupActionEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "DeleteDBSubnetGroup":
		*e = GETDeleteDBSubnetGroupActionEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for GETDeleteDBSubnetGroupActionEnum: %v", v)
	}
}

// GETDeleteDBSubnetGroupVersionEnum
type GETDeleteDBSubnetGroupVersionEnum string

const (
	GETDeleteDBSubnetGroupVersionEnumTwoThousandAndFourteen0901 GETDeleteDBSubnetGroupVersionEnum = "2014-09-01"
)

func (e GETDeleteDBSubnetGroupVersionEnum) ToPointer() *GETDeleteDBSubnetGroupVersionEnum {
	return &e
}

func (e *GETDeleteDBSubnetGroupVersionEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "2014-09-01":
		*e = GETDeleteDBSubnetGroupVersionEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for GETDeleteDBSubnetGroupVersionEnum: %v", v)
	}
}

type GETDeleteDBSubnetGroupRequest struct {
	Action            GETDeleteDBSubnetGroupActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DBSubnetGroupName string                            `queryParam:"style=form,explode=true,name=DBSubnetGroupName"`
	Version           GETDeleteDBSubnetGroupVersionEnum `queryParam:"style=form,explode=true,name=Version"`
	XAmzAlgorithm     *string                           `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GETDeleteDBSubnetGroupResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int
	RawResponse *http.Response
}
