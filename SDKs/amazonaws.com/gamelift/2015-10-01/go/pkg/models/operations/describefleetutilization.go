// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"fmt"
	"net/http"
	"openapi/pkg/models/shared"
)

// DescribeFleetUtilizationXAmzTargetEnum
type DescribeFleetUtilizationXAmzTargetEnum string

const (
	DescribeFleetUtilizationXAmzTargetEnumGameLiftDescribeFleetUtilization DescribeFleetUtilizationXAmzTargetEnum = "GameLift.DescribeFleetUtilization"
)

func (e DescribeFleetUtilizationXAmzTargetEnum) ToPointer() *DescribeFleetUtilizationXAmzTargetEnum {
	return &e
}

func (e *DescribeFleetUtilizationXAmzTargetEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "GameLift.DescribeFleetUtilization":
		*e = DescribeFleetUtilizationXAmzTargetEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for DescribeFleetUtilizationXAmzTargetEnum: %v", v)
	}
}

type DescribeFleetUtilizationRequest struct {
	DescribeFleetUtilizationInput shared.DescribeFleetUtilizationInput `request:"mediaType=application/json"`
	// Pagination limit
	Limit *string `queryParam:"style=form,explode=true,name=Limit"`
	// Pagination token
	NextToken         *string                                `queryParam:"style=form,explode=true,name=NextToken"`
	XAmzAlgorithm     *string                                `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeFleetUtilizationXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DescribeFleetUtilizationResponse struct {
	ContentType string
	// Success
	DescribeFleetUtilizationOutput *shared.DescribeFleetUtilizationOutput
	// InternalServiceException
	InternalServiceException interface{}
	// InvalidRequestException
	InvalidRequestException interface{}
	// NotFoundException
	NotFoundException interface{}
	StatusCode        int
	RawResponse       *http.Response
	// UnauthorizedException
	UnauthorizedException interface{}
}
