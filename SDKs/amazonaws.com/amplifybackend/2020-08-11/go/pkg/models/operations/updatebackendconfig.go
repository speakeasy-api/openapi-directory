package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateBackendConfigPathParams struct {
	AppID string `pathParam:"style=simple,explode=false,name=appId"`
}

type UpdateBackendConfigHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

// UpdateBackendConfigRequestBodyLoginAuthConfig
// The request object for this operation.
type UpdateBackendConfigRequestBodyLoginAuthConfig struct {
	AwsCognitoIdentityPoolID map[string]interface{} `json:"AwsCognitoIdentityPoolId,omitempty"`
	AwsCognitoRegion         map[string]interface{} `json:"AwsCognitoRegion,omitempty"`
	AwsUserPoolsID           map[string]interface{} `json:"AwsUserPoolsId,omitempty"`
	AwsUserPoolsWebClientID  map[string]interface{} `json:"AwsUserPoolsWebClientId,omitempty"`
}

type UpdateBackendConfigRequestBody struct {
	LoginAuthConfig *UpdateBackendConfigRequestBodyLoginAuthConfig `json:"loginAuthConfig,omitempty"`
}

type UpdateBackendConfigRequest struct {
	PathParams UpdateBackendConfigPathParams
	Headers    UpdateBackendConfigHeaders
	Request    UpdateBackendConfigRequestBody `request:"mediaType=application/json"`
}

type UpdateBackendConfigResponse struct {
	BadRequestException         *interface{}
	ContentType                 string
	GatewayTimeoutException     *interface{}
	NotFoundException           *interface{}
	StatusCode                  int64
	TooManyRequestsException    *interface{}
	UpdateBackendConfigResponse *shared.UpdateBackendConfigResponse
}
