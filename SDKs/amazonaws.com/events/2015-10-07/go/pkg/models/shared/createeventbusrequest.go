package shared

type CreateEventBusRequest struct {
	EventSourceName *string                `json:"EventSourceName,omitempty"`
	Name            map[string]interface{} `json:"Name"`
	Tags            []Tag                  `json:"Tags,omitempty"`
}
