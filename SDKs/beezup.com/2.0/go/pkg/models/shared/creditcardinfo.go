package shared

type CreditCardInfo struct {
	CardNumber           string `json:"cardNumber"`
	CardVerificationCode string `json:"cardVerificationCode"`
	ExpirationMonth      int32  `json:"expirationMonth"`
	ExpirationYear       int32  `json:"expirationYear"`
}
