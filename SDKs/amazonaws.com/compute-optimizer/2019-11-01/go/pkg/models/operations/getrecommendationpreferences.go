// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"fmt"
	"net/http"
	"openapi/pkg/models/shared"
)

// GetRecommendationPreferencesXAmzTargetEnum
type GetRecommendationPreferencesXAmzTargetEnum string

const (
	GetRecommendationPreferencesXAmzTargetEnumComputeOptimizerServiceGetRecommendationPreferences GetRecommendationPreferencesXAmzTargetEnum = "ComputeOptimizerService.GetRecommendationPreferences"
)

func (e GetRecommendationPreferencesXAmzTargetEnum) ToPointer() *GetRecommendationPreferencesXAmzTargetEnum {
	return &e
}

func (e *GetRecommendationPreferencesXAmzTargetEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "ComputeOptimizerService.GetRecommendationPreferences":
		*e = GetRecommendationPreferencesXAmzTargetEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for GetRecommendationPreferencesXAmzTargetEnum: %v", v)
	}
}

type GetRecommendationPreferencesRequest struct {
	GetRecommendationPreferencesRequest shared.GetRecommendationPreferencesRequest `request:"mediaType=application/json"`
	XAmzAlgorithm                       *string                                    `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256                   *string                                    `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential                      *string                                    `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate                            *string                                    `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken                   *string                                    `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature                       *string                                    `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders                   *string                                    `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget                          GetRecommendationPreferencesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
	// Pagination limit
	MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
	// Pagination token
	NextToken *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type GetRecommendationPreferencesResponse struct {
	// AccessDeniedException
	AccessDeniedException interface{}
	ContentType           string
	// Success
	GetRecommendationPreferencesResponse *shared.GetRecommendationPreferencesResponse
	// InternalServerException
	InternalServerException interface{}
	// InvalidParameterValueException
	InvalidParameterValueException interface{}
	// MissingAuthenticationToken
	MissingAuthenticationToken interface{}
	// OptInRequiredException
	OptInRequiredException interface{}
	StatusCode             int
	RawResponse            *http.Response
	// ResourceNotFoundException
	ResourceNotFoundException interface{}
	// ServiceUnavailableException
	ServiceUnavailableException interface{}
	// ThrottlingException
	ThrottlingException interface{}
}
