package shared

type GetSavingsPlansPurchaseRecommendationRequest struct {
	AccountScope         *AccountScopeEnum             `json:"AccountScope,omitempty"`
	Filter               *Expression                   `json:"Filter,omitempty"`
	LookbackPeriodInDays LookbackPeriodInDaysEnum      `json:"LookbackPeriodInDays"`
	NextPageToken        *string                       `json:"NextPageToken,omitempty"`
	PageSize             *int64                        `json:"PageSize,omitempty"`
	PaymentOption        PaymentOptionEnum             `json:"PaymentOption"`
	SavingsPlansType     SupportedSavingsPlansTypeEnum `json:"SavingsPlansType"`
	TermInYears          TermInYearsEnum               `json:"TermInYears"`
}
