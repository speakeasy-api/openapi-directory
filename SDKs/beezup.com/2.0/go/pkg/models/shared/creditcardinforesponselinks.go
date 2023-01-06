package shared

// CreditCardInfoResponseLinks
// The different actions you can make on this offer
type CreditCardInfoResponseLinks struct {
	SaveCreditCardInfo map[string]interface{} `json:"saveCreditCardInfo"`
	Self               map[string]interface{} `json:"self"`
}
