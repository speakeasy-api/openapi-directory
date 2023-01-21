package shared

type GetReservationPurchaseRecommendationRequest struct {
	AccountID            *string                   `json:"AccountId,omitempty"`
	AccountScope         *AccountScopeEnum         `json:"AccountScope,omitempty"`
	Filter               *Expression               `json:"Filter,omitempty"`
	LookbackPeriodInDays *LookbackPeriodInDaysEnum `json:"LookbackPeriodInDays,omitempty"`
	NextPageToken        *string                   `json:"NextPageToken,omitempty"`
	PageSize             *int64                    `json:"PageSize,omitempty"`
	PaymentOption        *PaymentOptionEnum        `json:"PaymentOption,omitempty"`
	Service              string                    `json:"Service"`
	ServiceSpecification *ServiceSpecification     `json:"ServiceSpecification,omitempty"`
	TermInYears          *TermInYearsEnum          `json:"TermInYears,omitempty"`
}
