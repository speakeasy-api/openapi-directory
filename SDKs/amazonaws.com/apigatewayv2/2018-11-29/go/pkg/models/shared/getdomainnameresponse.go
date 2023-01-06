package shared

type GetDomainNameResponse struct {
	APIMappingSelectionExpression map[string]interface{} `json:"ApiMappingSelectionExpression,omitempty"`
	DomainName                    map[string]interface{} `json:"DomainName,omitempty"`
	DomainNameConfigurations      map[string]interface{} `json:"DomainNameConfigurations,omitempty"`
	MutualTLSAuthentication       map[string]interface{} `json:"MutualTlsAuthentication,omitempty"`
	Tags                          map[string]string      `json:"Tags,omitempty"`
}
