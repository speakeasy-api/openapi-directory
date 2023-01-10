package shared

// GetDomainNameResponseMutualTLSAuthentication
// The mutual TLS authentication configuration for a custom domain name.
type GetDomainNameResponseMutualTLSAuthentication struct {
	TruststoreURI      map[string]interface{} `json:"TruststoreUri,omitempty"`
	TruststoreVersion  map[string]interface{} `json:"TruststoreVersion,omitempty"`
	TruststoreWarnings map[string]interface{} `json:"TruststoreWarnings,omitempty"`
}

type GetDomainNameResponse struct {
	APIMappingSelectionExpression map[string]interface{}                        `json:"ApiMappingSelectionExpression,omitempty"`
	DomainName                    map[string]interface{}                        `json:"DomainName,omitempty"`
	DomainNameConfigurations      map[string]interface{}                        `json:"DomainNameConfigurations,omitempty"`
	MutualTLSAuthentication       *GetDomainNameResponseMutualTLSAuthentication `json:"MutualTlsAuthentication,omitempty"`
	Tags                          map[string]string                             `json:"Tags,omitempty"`
}
