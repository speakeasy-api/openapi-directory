package shared

import (
	"time"
)

// GetSamlProviderResponse
// Contains the response to a successful <a>GetSAMLProvider</a> request.
type GetSamlProviderResponse struct {
	CreateDate           *time.Time
	SAMLMetadataDocument *string
	Tags                 []Tag
	ValidUntil           *time.Time
}
