package shared

// CustomerIndexLinks
// Gives you want you can do on this API
type CustomerIndexLinks struct {
	AccountInfo    map[string]interface{} `json:"accountInfo"`
	BillingPeriods map[string]interface{} `json:"billingPeriods"`
	Contracts      map[string]interface{} `json:"contracts,omitempty"`
	FriendInfo     map[string]interface{} `json:"friendInfo"`
	GetOffer       map[string]interface{} `json:"getOffer,omitempty"`
	Invoices       map[string]interface{} `json:"invoices,omitempty"`
	Logout         map[string]interface{} `json:"logout,omitempty"`
	Self           map[string]interface{} `json:"self"`
	StandardOffers map[string]interface{} `json:"standardOffers"`
	Stores         map[string]interface{} `json:"stores,omitempty"`
}
