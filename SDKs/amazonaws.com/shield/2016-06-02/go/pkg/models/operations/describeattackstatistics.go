// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"fmt"
	"net/http"
	"openapi/pkg/models/shared"
)

// DescribeAttackStatisticsXAmzTargetEnum
type DescribeAttackStatisticsXAmzTargetEnum string

const (
	DescribeAttackStatisticsXAmzTargetEnumAwsShield20160616DescribeAttackStatistics DescribeAttackStatisticsXAmzTargetEnum = "AWSShield_20160616.DescribeAttackStatistics"
)

func (e DescribeAttackStatisticsXAmzTargetEnum) ToPointer() *DescribeAttackStatisticsXAmzTargetEnum {
	return &e
}

func (e *DescribeAttackStatisticsXAmzTargetEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "AWSShield_20160616.DescribeAttackStatistics":
		*e = DescribeAttackStatisticsXAmzTargetEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for DescribeAttackStatisticsXAmzTargetEnum: %v", v)
	}
}

type DescribeAttackStatisticsRequest struct {
	RequestBody       map[string]interface{}                 `request:"mediaType=application/json"`
	XAmzAlgorithm     *string                                `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeAttackStatisticsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DescribeAttackStatisticsResponse struct {
	ContentType string
	// Success
	DescribeAttackStatisticsResponse *shared.DescribeAttackStatisticsResponse
	// InternalErrorException
	InternalErrorException interface{}
	StatusCode             int
	RawResponse            *http.Response
}
