package shared

type CollectionCreation struct {
	Privacy CollectionPrivacyEnum `json:"privacy"`
	Title   string                `json:"title"`
}
