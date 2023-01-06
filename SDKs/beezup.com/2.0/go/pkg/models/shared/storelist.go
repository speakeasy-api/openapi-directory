package shared

type StoreList struct {
	Links  StoreListLinks `json:"links"`
	Stores []Store        `json:"stores"`
}
