package operations

import (
	"openapi/pkg/models/shared"
)

type ModifyEventSubscriptionXAmzTargetEnum string

const (
	ModifyEventSubscriptionXAmzTargetEnumAmazonDmSv20160101ModifyEventSubscription ModifyEventSubscriptionXAmzTargetEnum = "AmazonDMSv20160101.ModifyEventSubscription"
)

type ModifyEventSubscriptionHeaders struct {
	XAmzAlgorithm     *string                               `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                               `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                               `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                               `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                               `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                               `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                               `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ModifyEventSubscriptionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type ModifyEventSubscriptionRequest struct {
	Headers ModifyEventSubscriptionHeaders
	Request shared.ModifyEventSubscriptionMessage `request:"mediaType=application/json"`
}

type ModifyEventSubscriptionResponse struct {
	ContentType                     string
	KMSAccessDeniedFault            *interface{}
	KMSDisabledFault                *interface{}
	KMSInvalidStateFault            *interface{}
	KMSNotFoundFault                *interface{}
	KMSThrottlingFault              *interface{}
	ModifyEventSubscriptionResponse *shared.ModifyEventSubscriptionResponse
	ResourceNotFoundFault           *interface{}
	ResourceQuotaExceededFault      *interface{}
	SNSInvalidTopicFault            *interface{}
	SNSNoAuthorizationFault         *interface{}
	StatusCode                      int64
}
