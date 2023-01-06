package shared

type StandardOffer struct {
	AdditionalClickPrice *float64             `json:"additionalClickPrice,omitempty"`
	CurrencyCode         *string              `json:"currencyCode,omitempty"`
	FixedPrice           *float64             `json:"fixedPrice,omitempty"`
	Functionalities      []OfferFunctionality `json:"functionalities,omitempty"`
	IncludedClick        *int32               `json:"includedClick,omitempty"`
	IsMostPopular        *bool                `json:"isMostPopular,omitempty"`
	IsOldOffer           *bool                `json:"isOldOffer,omitempty"`
	Links                StandardOfferLinks   `json:"links"`
	Name                 string               `json:"name"`
	OfferID              int32                `json:"offerId"`
	Position             *int32               `json:"position,omitempty"`
}
