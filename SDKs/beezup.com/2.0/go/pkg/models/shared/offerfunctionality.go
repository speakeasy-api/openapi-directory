package shared

type OfferFunctionality struct {
	FunctionalityCode string  `json:"functionalityCode"`
	MaxValueInteger   *int32  `json:"maxValueInteger,omitempty"`
	Text              *string `json:"text,omitempty"`
	Unlimited         bool    `json:"unlimited"`
}
