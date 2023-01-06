package shared

type CreditCardInfoResponse struct {
	CreditCardInfo       *interface{}                `json:"creditCardInfo,omitempty"`
	CurrentPaymentMethod PaymentMethodEnum           `json:"currentPaymentMethod"`
	Info                 *BeezUpCommonInfoSummaries  `json:"info,omitempty"`
	Links                CreditCardInfoResponseLinks `json:"links"`
}
