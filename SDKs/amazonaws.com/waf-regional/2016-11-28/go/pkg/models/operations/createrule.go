package operations

import (
	"openapi/pkg/models/shared"
)

type CreateRuleXAmzTargetEnum string

const (
	CreateRuleXAmzTargetEnumAwswafRegional20161128CreateRule CreateRuleXAmzTargetEnum = "AWSWAF_Regional_20161128.CreateRule"
)

type CreateRuleHeaders struct {
	XAmzAlgorithm     *string                  `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                  `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                  `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                  `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                  `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                  `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                  `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateRuleXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type CreateRuleRequest struct {
	Headers CreateRuleHeaders
	Request shared.CreateRuleRequest `request:"mediaType=application/json"`
}

type CreateRuleResponse struct {
	ContentType                           string
	CreateRuleResponse                    *shared.CreateRuleResponse
	StatusCode                            int64
	WAFBadRequestException                *interface{}
	WAFDisallowedNameException            *interface{}
	WAFInternalErrorException             *interface{}
	WAFInvalidParameterException          *interface{}
	WAFLimitsExceededException            *interface{}
	WAFStaleDataException                 *interface{}
	WAFTagOperationException              *interface{}
	WAFTagOperationInternalErrorException *interface{}
}
