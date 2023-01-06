package shared

// CreateSamlProviderResponse
// Contains the response to a successful <a>CreateSAMLProvider</a> request.
type CreateSamlProviderResponse struct {
	SAMLProviderArn *string
	Tags            []Tag
}
