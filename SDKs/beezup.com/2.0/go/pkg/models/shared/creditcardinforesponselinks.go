package shared

// CreditCardInfoResponseLinks
// The different actions you can make on this offer
type CreditCardInfoResponseLinks struct {
	SaveCreditCardInfo LinksSaveCreditCardInfoLink `json:"saveCreditCardInfo"`
	Self               LinksGetCreditCardInfoLink  `json:"self"`
}
