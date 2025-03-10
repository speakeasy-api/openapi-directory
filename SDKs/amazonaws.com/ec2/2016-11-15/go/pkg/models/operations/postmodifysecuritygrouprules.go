// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"fmt"
	"net/http"
)

// POSTModifySecurityGroupRulesActionEnum
type POSTModifySecurityGroupRulesActionEnum string

const (
	POSTModifySecurityGroupRulesActionEnumModifySecurityGroupRules POSTModifySecurityGroupRulesActionEnum = "ModifySecurityGroupRules"
)

func (e POSTModifySecurityGroupRulesActionEnum) ToPointer() *POSTModifySecurityGroupRulesActionEnum {
	return &e
}

func (e *POSTModifySecurityGroupRulesActionEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "ModifySecurityGroupRules":
		*e = POSTModifySecurityGroupRulesActionEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for POSTModifySecurityGroupRulesActionEnum: %v", v)
	}
}

// POSTModifySecurityGroupRulesVersionEnum
type POSTModifySecurityGroupRulesVersionEnum string

const (
	POSTModifySecurityGroupRulesVersionEnumTwoThousandAndSixteen1115 POSTModifySecurityGroupRulesVersionEnum = "2016-11-15"
)

func (e POSTModifySecurityGroupRulesVersionEnum) ToPointer() *POSTModifySecurityGroupRulesVersionEnum {
	return &e
}

func (e *POSTModifySecurityGroupRulesVersionEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "2016-11-15":
		*e = POSTModifySecurityGroupRulesVersionEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for POSTModifySecurityGroupRulesVersionEnum: %v", v)
	}
}

type POSTModifySecurityGroupRulesRequest struct {
	Action            POSTModifySecurityGroupRulesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	RequestBody       []byte                                  `request:"mediaType=text/xml"`
	Version           POSTModifySecurityGroupRulesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
	XAmzAlgorithm     *string                                 `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                 `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                 `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                 `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                 `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                 `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                 `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type POSTModifySecurityGroupRulesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int
	RawResponse *http.Response
}
