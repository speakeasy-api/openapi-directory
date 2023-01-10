package shared

type OrderLinks struct {
	ClearMerchantInfo LinksClearMerchantOrderInfoLink `json:"clearMerchantInfo"`
	Harvest           LinksHarvestOrderLink           `json:"harvest"`
	History           LinksGetOrderHistoryLink        `json:"history"`
	Self              LinksGetOrderLink               `json:"self"`
	SetMerchantInfo   LinksSetMerchantOrderInfoLink   `json:"setMerchantInfo"`
}
