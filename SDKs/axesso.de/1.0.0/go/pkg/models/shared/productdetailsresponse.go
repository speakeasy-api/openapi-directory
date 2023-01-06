package shared

type ProductDetailsResponse struct {
	AnsweredQuestions        *int64   `json:"answeredQuestions,omitempty"`
	Asin                     *string  `json:"asin,omitempty"`
	CountReview              *int64   `json:"countReview,omitempty"`
	Features                 []string `json:"features,omitempty"`
	FulfilledBy              *string  `json:"fulfilledBy,omitempty"`
	Manufacturer             *string  `json:"manufacturer,omitempty"`
	Price                    *float64 `json:"price,omitempty"`
	PriceSaving              *string  `json:"priceSaving,omitempty"`
	PriceShippingInformation *string  `json:"priceShippingInformation,omitempty"`
	Prime                    *bool    `json:"prime,omitempty"`
	ProductRating            *string  `json:"productRating,omitempty"`
	ProductTitle             *string  `json:"productTitle,omitempty"`
	ResponseMessage          *string  `json:"responseMessage,omitempty"`
	ResponseStatus           *string  `json:"responseStatus,omitempty"`
	RetailPrice              *float64 `json:"retailPrice,omitempty"`
	SizeSelection            []string `json:"sizeSelection,omitempty"`
	SoldBy                   *string  `json:"soldBy,omitempty"`
	WarehouseAvailability    *string  `json:"warehouseAvailability,omitempty"`
}
