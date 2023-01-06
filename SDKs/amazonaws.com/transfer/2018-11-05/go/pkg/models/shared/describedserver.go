package shared

// DescribedServerIdentityProviderDetails
// Returns information related to the type of user authentication that is in use for a file transfer protocol-enabled server's users. A server can have only one method of authentication.
type DescribedServerIdentityProviderDetails struct {
	DirectoryID    *string `json:"DirectoryId,omitempty"`
	InvocationRole *string `json:"InvocationRole,omitempty"`
	URL            *string `json:"Url,omitempty"`
}

// DescribedServer
// Describes the properties of a file transfer protocol-enabled server that was specified.
type DescribedServer struct {
	Arn                     string                                  `json:"Arn"`
	Certificate             *string                                 `json:"Certificate,omitempty"`
	Domain                  *DomainEnum                             `json:"Domain,omitempty"`
	EndpointDetails         *EndpointDetails                        `json:"EndpointDetails,omitempty"`
	EndpointType            *EndpointTypeEnum                       `json:"EndpointType,omitempty"`
	HostKeyFingerprint      *string                                 `json:"HostKeyFingerprint,omitempty"`
	IdentityProviderDetails *DescribedServerIdentityProviderDetails `json:"IdentityProviderDetails,omitempty"`
	IdentityProviderType    *IdentityProviderTypeEnum               `json:"IdentityProviderType,omitempty"`
	LoggingRole             *string                                 `json:"LoggingRole,omitempty"`
	ProtocolDetails         *ProtocolDetails                        `json:"ProtocolDetails,omitempty"`
	Protocols               []ProtocolEnum                          `json:"Protocols,omitempty"`
	SecurityPolicyName      *string                                 `json:"SecurityPolicyName,omitempty"`
	ServerID                *string                                 `json:"ServerId,omitempty"`
	State                   *StateEnum                              `json:"State,omitempty"`
	Tags                    map[string]interface{}                  `json:"Tags,omitempty"`
	UserCount               *int64                                  `json:"UserCount,omitempty"`
	WorkflowDetails         *WorkflowDetails1                       `json:"WorkflowDetails,omitempty"`
}
