package shared

// UpdatePrivateDNSNamespaceRequestNamespace
// Updated properties for the private DNS namespace.
type UpdatePrivateDNSNamespaceRequestNamespace struct {
	Description *string                              `json:"Description,omitempty"`
	Properties  *PrivateDNSNamespacePropertiesChange `json:"Properties,omitempty"`
}

type UpdatePrivateDNSNamespaceRequest struct {
	ID               string                                    `json:"Id"`
	Namespace        UpdatePrivateDNSNamespaceRequestNamespace `json:"Namespace"`
	UpdaterRequestID *string                                   `json:"UpdaterRequestId,omitempty"`
}
