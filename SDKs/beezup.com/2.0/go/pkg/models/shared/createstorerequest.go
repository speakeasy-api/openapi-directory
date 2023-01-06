package shared

// CreateStoreRequest
// The request to create a store. The store identifier is optional, if null it will be automatically computed.
type CreateStoreRequest struct {
	CountryIsoCodeAlpha3 string   `json:"countryIsoCodeAlpha3"`
	ID                   *string  `json:"id,omitempty"`
	Name                 string   `json:"name"`
	Sectors              []string `json:"sectors"`
	URL                  string   `json:"url"`
}
