package shared

type StoreShares struct {
	Links  StoreSharesLinks `json:"links"`
	Shares []StoreShare     `json:"shares"`
}
