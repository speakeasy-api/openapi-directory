package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateLoadBalancerPathParams struct {
	LbID string `pathParam:"style=simple,explode=false,name=lb_id"`
}

type UpdateLoadBalancerRequestBodyAssignDropletsByID struct {
	DropletIds []int64 `json:"droplet_ids,omitempty"`
}

type UpdateLoadBalancerRequestBodyAssignDropletsByTagAlgorithmEnum string

const (
	UpdateLoadBalancerRequestBodyAssignDropletsByTagAlgorithmEnumRoundRobin       UpdateLoadBalancerRequestBodyAssignDropletsByTagAlgorithmEnum = "round_robin"
	UpdateLoadBalancerRequestBodyAssignDropletsByTagAlgorithmEnumLeastConnections UpdateLoadBalancerRequestBodyAssignDropletsByTagAlgorithmEnum = "least_connections"
)

type UpdateLoadBalancerRequestBodyAssignDropletsByTagForwardingRulesEntryProtocolEnum string

const (
	UpdateLoadBalancerRequestBodyAssignDropletsByTagForwardingRulesEntryProtocolEnumHTTP  UpdateLoadBalancerRequestBodyAssignDropletsByTagForwardingRulesEntryProtocolEnum = "http"
	UpdateLoadBalancerRequestBodyAssignDropletsByTagForwardingRulesEntryProtocolEnumHTTPS UpdateLoadBalancerRequestBodyAssignDropletsByTagForwardingRulesEntryProtocolEnum = "https"
	UpdateLoadBalancerRequestBodyAssignDropletsByTagForwardingRulesEntryProtocolEnumHttp2 UpdateLoadBalancerRequestBodyAssignDropletsByTagForwardingRulesEntryProtocolEnum = "http2"
	UpdateLoadBalancerRequestBodyAssignDropletsByTagForwardingRulesEntryProtocolEnumTCP   UpdateLoadBalancerRequestBodyAssignDropletsByTagForwardingRulesEntryProtocolEnum = "tcp"
)

type UpdateLoadBalancerRequestBodyAssignDropletsByTagForwardingRulesTargetProtocolEnum string

const (
	UpdateLoadBalancerRequestBodyAssignDropletsByTagForwardingRulesTargetProtocolEnumHTTP  UpdateLoadBalancerRequestBodyAssignDropletsByTagForwardingRulesTargetProtocolEnum = "http"
	UpdateLoadBalancerRequestBodyAssignDropletsByTagForwardingRulesTargetProtocolEnumHTTPS UpdateLoadBalancerRequestBodyAssignDropletsByTagForwardingRulesTargetProtocolEnum = "https"
	UpdateLoadBalancerRequestBodyAssignDropletsByTagForwardingRulesTargetProtocolEnumHttp2 UpdateLoadBalancerRequestBodyAssignDropletsByTagForwardingRulesTargetProtocolEnum = "http2"
	UpdateLoadBalancerRequestBodyAssignDropletsByTagForwardingRulesTargetProtocolEnumTCP   UpdateLoadBalancerRequestBodyAssignDropletsByTagForwardingRulesTargetProtocolEnum = "tcp"
)

// UpdateLoadBalancerRequestBodyAssignDropletsByTagForwardingRules
// An object specifying a forwarding rule for a load balancer.
type UpdateLoadBalancerRequestBodyAssignDropletsByTagForwardingRules struct {
	CertificateID  *string                                                                           `json:"certificate_id,omitempty"`
	EntryPort      int64                                                                             `json:"entry_port"`
	EntryProtocol  UpdateLoadBalancerRequestBodyAssignDropletsByTagForwardingRulesEntryProtocolEnum  `json:"entry_protocol"`
	TargetPort     int64                                                                             `json:"target_port"`
	TargetProtocol UpdateLoadBalancerRequestBodyAssignDropletsByTagForwardingRulesTargetProtocolEnum `json:"target_protocol"`
	TLSPassthrough *bool                                                                             `json:"tls_passthrough,omitempty"`
}

type UpdateLoadBalancerRequestBodyAssignDropletsByTagHealthCheckProtocolEnum string

const (
	UpdateLoadBalancerRequestBodyAssignDropletsByTagHealthCheckProtocolEnumHTTP  UpdateLoadBalancerRequestBodyAssignDropletsByTagHealthCheckProtocolEnum = "http"
	UpdateLoadBalancerRequestBodyAssignDropletsByTagHealthCheckProtocolEnumHTTPS UpdateLoadBalancerRequestBodyAssignDropletsByTagHealthCheckProtocolEnum = "https"
	UpdateLoadBalancerRequestBodyAssignDropletsByTagHealthCheckProtocolEnumTCP   UpdateLoadBalancerRequestBodyAssignDropletsByTagHealthCheckProtocolEnum = "tcp"
)

// UpdateLoadBalancerRequestBodyAssignDropletsByTagHealthCheck
// An object specifying health check settings for the load balancer.
type UpdateLoadBalancerRequestBodyAssignDropletsByTagHealthCheck struct {
	CheckIntervalSeconds   *int64                                                                   `json:"check_interval_seconds,omitempty"`
	HealthyThreshold       *int64                                                                   `json:"healthy_threshold,omitempty"`
	Path                   *string                                                                  `json:"path,omitempty"`
	Port                   *int64                                                                   `json:"port,omitempty"`
	Protocol               *UpdateLoadBalancerRequestBodyAssignDropletsByTagHealthCheckProtocolEnum `json:"protocol,omitempty"`
	ResponseTimeoutSeconds *int64                                                                   `json:"response_timeout_seconds,omitempty"`
	UnhealthyThreshold     *int64                                                                   `json:"unhealthy_threshold,omitempty"`
}

type UpdateLoadBalancerRequestBodyAssignDropletsByTagSizeEnum string

const (
	UpdateLoadBalancerRequestBodyAssignDropletsByTagSizeEnumLbSmall  UpdateLoadBalancerRequestBodyAssignDropletsByTagSizeEnum = "lb-small"
	UpdateLoadBalancerRequestBodyAssignDropletsByTagSizeEnumLbMedium UpdateLoadBalancerRequestBodyAssignDropletsByTagSizeEnum = "lb-medium"
	UpdateLoadBalancerRequestBodyAssignDropletsByTagSizeEnumLbLarge  UpdateLoadBalancerRequestBodyAssignDropletsByTagSizeEnum = "lb-large"
)

type UpdateLoadBalancerRequestBodyAssignDropletsByTagStickySessionsTypeEnum string

const (
	UpdateLoadBalancerRequestBodyAssignDropletsByTagStickySessionsTypeEnumCookies UpdateLoadBalancerRequestBodyAssignDropletsByTagStickySessionsTypeEnum = "cookies"
	UpdateLoadBalancerRequestBodyAssignDropletsByTagStickySessionsTypeEnumNone    UpdateLoadBalancerRequestBodyAssignDropletsByTagStickySessionsTypeEnum = "none"
)

// UpdateLoadBalancerRequestBodyAssignDropletsByTagStickySessions
// An object specifying sticky sessions settings for the load balancer.
type UpdateLoadBalancerRequestBodyAssignDropletsByTagStickySessions struct {
	CookieName       *string                                                                 `json:"cookie_name,omitempty"`
	CookieTTLSeconds *int64                                                                  `json:"cookie_ttl_seconds,omitempty"`
	Type             *UpdateLoadBalancerRequestBodyAssignDropletsByTagStickySessionsTypeEnum `json:"type,omitempty"`
}

type UpdateLoadBalancerRequestBodyAssignDropletsByTagInput struct {
	Algorithm              *UpdateLoadBalancerRequestBodyAssignDropletsByTagAlgorithmEnum    `json:"algorithm,omitempty"`
	EnableBackendKeepalive *bool                                                             `json:"enable_backend_keepalive,omitempty"`
	EnableProxyProtocol    *bool                                                             `json:"enable_proxy_protocol,omitempty"`
	ForwardingRules        []UpdateLoadBalancerRequestBodyAssignDropletsByTagForwardingRules `json:"forwarding_rules"`
	HealthCheck            *UpdateLoadBalancerRequestBodyAssignDropletsByTagHealthCheck      `json:"health_check,omitempty"`
	Name                   *string                                                           `json:"name,omitempty"`
	RedirectHTTPToHTTPS    *bool                                                             `json:"redirect_http_to_https,omitempty"`
	Size                   *UpdateLoadBalancerRequestBodyAssignDropletsByTagSizeEnum         `json:"size,omitempty"`
	StickySessions         *UpdateLoadBalancerRequestBodyAssignDropletsByTagStickySessions   `json:"sticky_sessions,omitempty"`
	VpcUUID                *string                                                           `json:"vpc_uuid,omitempty"`
}

type UpdateLoadBalancer401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id,omitempty"`
}

type UpdateLoadBalancerRequest struct {
	PathParams UpdateLoadBalancerPathParams
	Request    interface{} `request:"mediaType=application/json"`
}

type UpdateLoadBalancerResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	UpdateLoadBalancer200ApplicationJSONAny                   *interface{}
	UpdateLoadBalancer401ApplicationJSONObject                *UpdateLoadBalancer401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
