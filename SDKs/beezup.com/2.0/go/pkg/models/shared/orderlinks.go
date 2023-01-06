package shared

type OrderLinks struct {
	ClearMerchantInfo map[string]interface{} `json:"clearMerchantInfo"`
	Harvest           map[string]interface{} `json:"harvest"`
	History           map[string]interface{} `json:"history"`
	SetMerchantInfo   map[string]interface{} `json:"setMerchantInfo"`
}
