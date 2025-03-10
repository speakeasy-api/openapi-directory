// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"fmt"
	"net/http"
	"openapi/pkg/models/shared"
)

// CreateClusterXAmzTargetEnum
type CreateClusterXAmzTargetEnum string

const (
	CreateClusterXAmzTargetEnumAmazonDaxv3CreateCluster CreateClusterXAmzTargetEnum = "AmazonDAXV3.CreateCluster"
)

func (e CreateClusterXAmzTargetEnum) ToPointer() *CreateClusterXAmzTargetEnum {
	return &e
}

func (e *CreateClusterXAmzTargetEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "AmazonDAXV3.CreateCluster":
		*e = CreateClusterXAmzTargetEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for CreateClusterXAmzTargetEnum: %v", v)
	}
}

type CreateClusterRequest struct {
	CreateClusterRequest shared.CreateClusterRequest `request:"mediaType=application/json"`
	XAmzAlgorithm        *string                     `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256    *string                     `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential       *string                     `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate             *string                     `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken    *string                     `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature        *string                     `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders    *string                     `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget           CreateClusterXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type CreateClusterResponse struct {
	// ClusterAlreadyExistsFault
	ClusterAlreadyExistsFault interface{}
	// ClusterQuotaForCustomerExceededFault
	ClusterQuotaForCustomerExceededFault interface{}
	ContentType                          string
	// Success
	CreateClusterResponse *shared.CreateClusterResponse
	// InsufficientClusterCapacityFault
	InsufficientClusterCapacityFault interface{}
	// InvalidClusterStateFault
	InvalidClusterStateFault interface{}
	// InvalidParameterCombinationException
	InvalidParameterCombinationException interface{}
	// InvalidParameterGroupStateFault
	InvalidParameterGroupStateFault interface{}
	// InvalidParameterValueException
	InvalidParameterValueException interface{}
	// InvalidVPCNetworkStateFault
	InvalidVPCNetworkStateFault interface{}
	// NodeQuotaForClusterExceededFault
	NodeQuotaForClusterExceededFault interface{}
	// NodeQuotaForCustomerExceededFault
	NodeQuotaForCustomerExceededFault interface{}
	// ParameterGroupNotFoundFault
	ParameterGroupNotFoundFault interface{}
	// ServiceLinkedRoleNotFoundFault
	ServiceLinkedRoleNotFoundFault interface{}
	// ServiceQuotaExceededException
	ServiceQuotaExceededException interface{}
	StatusCode                    int
	RawResponse                   *http.Response
	// SubnetGroupNotFoundFault
	SubnetGroupNotFoundFault interface{}
	// TagQuotaPerResourceExceeded
	TagQuotaPerResourceExceeded interface{}
}
