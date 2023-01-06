package shared

// UpgradeOfferRequired
// The message contains the offer identifier required to execute this operation
type UpgradeOfferRequired struct {
	OfferID int32 `json:"offerId"`
}
