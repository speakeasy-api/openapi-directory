// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// ListEventSourcesResponse - Contains a list of event sources (see <a>API_EventSourceConfiguration</a>)
type ListEventSourcesResponse struct {
	EventSources []EventSourceConfiguration `json:"EventSources,omitempty"`
	NextMarker   *string                    `json:"NextMarker,omitempty"`
}
