package shared

type Onev21cdn1endpointsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesEndpointsItemsInput struct {
	CertificateID *string `json:"certificate_id,omitempty"`
	CustomDomain  *string `json:"custom_domain,omitempty"`
	Origin        string  `json:"origin"`
	TTL           *int64  `json:"ttl,omitempty"`
}
