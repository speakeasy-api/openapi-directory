package shared

type ConnectorEventEventSourceEnum string

const (
	ConnectorEventEventSourceEnumNative  ConnectorEventEventSourceEnum = "native"
	ConnectorEventEventSourceEnumVirtual ConnectorEventEventSourceEnum = "virtual"
)

// ConnectorEvent
// Unify event that is supported on the connector. Events are delivered via Webhooks.
type ConnectorEvent struct {
	DownstreamEventType *string                        `json:"downstream_event_type,omitempty"`
	EventSource         *ConnectorEventEventSourceEnum `json:"event_source,omitempty"`
	EventType           *string                        `json:"event_type,omitempty"`
	Resource            *string                        `json:"resource,omitempty"`
}
