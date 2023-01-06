package shared

// OrderIndexLinks
// Gives you all entry point operations you can do on this API
type OrderIndexLinks struct {
	AutoTransitions    map[string]interface{} `json:"autoTransitions"`
	ClearMerchantInfos map[string]interface{} `json:"clearMerchantInfos"`
	Export             map[string]interface{} `json:"export"`
	Exportations       map[string]interface{} `json:"exportations,omitempty"`
	Harvest            map[string]interface{} `json:"harvest"`
	LightOrders        map[string]interface{} `json:"lightOrders"`
	Orders             map[string]interface{} `json:"orders"`
	Self               map[string]interface{} `json:"self"`
	SetMerchantInfos   map[string]interface{} `json:"setMerchantInfos"`
	Status             map[string]interface{} `json:"status"`
}
