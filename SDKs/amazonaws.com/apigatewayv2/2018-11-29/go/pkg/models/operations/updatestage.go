package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateStagePathParams struct {
	APIID     string `pathParam:"style=simple,explode=false,name=apiId"`
	StageName string `pathParam:"style=simple,explode=false,name=stageName"`
}

type UpdateStageHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

// UpdateStageRequestBodyAccessLogSettings
// Settings for logging access in a stage.
type UpdateStageRequestBodyAccessLogSettings struct {
	DestinationArn map[string]interface{} `json:"DestinationArn,omitempty"`
	Format         map[string]interface{} `json:"Format,omitempty"`
}

// UpdateStageRequestBodyDefaultRouteSettings
// Represents a collection of route settings.
type UpdateStageRequestBodyDefaultRouteSettings struct {
	DataTraceEnabled       map[string]interface{} `json:"DataTraceEnabled,omitempty"`
	DetailedMetricsEnabled map[string]interface{} `json:"DetailedMetricsEnabled,omitempty"`
	LoggingLevel           map[string]interface{} `json:"LoggingLevel,omitempty"`
	ThrottlingBurstLimit   map[string]interface{} `json:"ThrottlingBurstLimit,omitempty"`
	ThrottlingRateLimit    map[string]interface{} `json:"ThrottlingRateLimit,omitempty"`
}

type UpdateStageRequestBody struct {
	AccessLogSettings    *UpdateStageRequestBodyAccessLogSettings    `json:"accessLogSettings,omitempty"`
	AutoDeploy           *bool                                       `json:"autoDeploy,omitempty"`
	ClientCertificateID  *string                                     `json:"clientCertificateId,omitempty"`
	DefaultRouteSettings *UpdateStageRequestBodyDefaultRouteSettings `json:"defaultRouteSettings,omitempty"`
	DeploymentID         *string                                     `json:"deploymentId,omitempty"`
	Description          *string                                     `json:"description,omitempty"`
	RouteSettings        map[string]shared.RouteSettings             `json:"routeSettings,omitempty"`
	StageVariables       map[string]string                           `json:"stageVariables,omitempty"`
}

type UpdateStageRequest struct {
	PathParams UpdateStagePathParams
	Headers    UpdateStageHeaders
	Request    UpdateStageRequestBody `request:"mediaType=application/json"`
}

type UpdateStageResponse struct {
	BadRequestException      *interface{}
	ConflictException        *interface{}
	ContentType              string
	NotFoundException        *interface{}
	StatusCode               int64
	TooManyRequestsException *interface{}
	UpdateStageResponse      *shared.UpdateStageResponse
}
