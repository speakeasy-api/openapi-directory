// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"fmt"
	"net/http"
	"openapi/pkg/models/shared"
)

// DescribeLocationFsxOntapXAmzTargetEnum
type DescribeLocationFsxOntapXAmzTargetEnum string

const (
	DescribeLocationFsxOntapXAmzTargetEnumFmrsServiceDescribeLocationFsxOntap DescribeLocationFsxOntapXAmzTargetEnum = "FmrsService.DescribeLocationFsxOntap"
)

func (e DescribeLocationFsxOntapXAmzTargetEnum) ToPointer() *DescribeLocationFsxOntapXAmzTargetEnum {
	return &e
}

func (e *DescribeLocationFsxOntapXAmzTargetEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "FmrsService.DescribeLocationFsxOntap":
		*e = DescribeLocationFsxOntapXAmzTargetEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for DescribeLocationFsxOntapXAmzTargetEnum: %v", v)
	}
}

type DescribeLocationFsxOntapRequest struct {
	DescribeLocationFsxOntapRequest shared.DescribeLocationFsxOntapRequest `request:"mediaType=application/json"`
	XAmzAlgorithm                   *string                                `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256               *string                                `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential                  *string                                `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate                        *string                                `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken               *string                                `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature                   *string                                `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders               *string                                `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget                      DescribeLocationFsxOntapXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DescribeLocationFsxOntapResponse struct {
	ContentType string
	// Success
	DescribeLocationFsxOntapResponse *shared.DescribeLocationFsxOntapResponse
	// InternalException
	InternalException interface{}
	// InvalidRequestException
	InvalidRequestException interface{}
	StatusCode              int
	RawResponse             *http.Response
}
