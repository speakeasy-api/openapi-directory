package shared

// CreateStageResponseAccessLogSettings
// Settings for logging access in this stage.
type CreateStageResponseAccessLogSettings struct {
	DestinationArn map[string]interface{} `json:"DestinationArn,omitempty"`
	Format         map[string]interface{} `json:"Format,omitempty"`
}

// CreateStageResponseDefaultRouteSettings
// Default route settings for the stage.
type CreateStageResponseDefaultRouteSettings struct {
	DataTraceEnabled       map[string]interface{} `json:"DataTraceEnabled,omitempty"`
	DetailedMetricsEnabled map[string]interface{} `json:"DetailedMetricsEnabled,omitempty"`
	LoggingLevel           map[string]interface{} `json:"LoggingLevel,omitempty"`
	ThrottlingBurstLimit   map[string]interface{} `json:"ThrottlingBurstLimit,omitempty"`
	ThrottlingRateLimit    map[string]interface{} `json:"ThrottlingRateLimit,omitempty"`
}

type CreateStageResponse struct {
	AccessLogSettings           *CreateStageResponseAccessLogSettings    `json:"AccessLogSettings,omitempty"`
	APIGatewayManaged           map[string]interface{}                   `json:"ApiGatewayManaged,omitempty"`
	AutoDeploy                  map[string]interface{}                   `json:"AutoDeploy,omitempty"`
	ClientCertificateID         map[string]interface{}                   `json:"ClientCertificateId,omitempty"`
	CreatedDate                 map[string]interface{}                   `json:"CreatedDate,omitempty"`
	DefaultRouteSettings        *CreateStageResponseDefaultRouteSettings `json:"DefaultRouteSettings,omitempty"`
	DeploymentID                map[string]interface{}                   `json:"DeploymentId,omitempty"`
	Description                 map[string]interface{}                   `json:"Description,omitempty"`
	LastDeploymentStatusMessage map[string]interface{}                   `json:"LastDeploymentStatusMessage,omitempty"`
	LastUpdatedDate             map[string]interface{}                   `json:"LastUpdatedDate,omitempty"`
	RouteSettings               map[string]RouteSettings                 `json:"RouteSettings,omitempty"`
	StageName                   map[string]interface{}                   `json:"StageName,omitempty"`
	StageVariables              map[string]string                        `json:"StageVariables,omitempty"`
	Tags                        map[string]string                        `json:"Tags,omitempty"`
}
