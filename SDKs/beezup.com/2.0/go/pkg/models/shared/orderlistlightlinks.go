package shared

// OrderListLightLinks
// The list of actions you can do from the order list response
type OrderListLightLinks struct {
	ClearMerchantInfos LinksClearMerchantOrderInfoListLink            `json:"clearMerchantInfos"`
	Export             LinksExportOrdersLink                          `json:"export"`
	Harvest            LinksHarvestAllLink                            `json:"harvest"`
	Self               LinksGetOrderListLightLink                     `json:"self"`
	SetMerchantInfos   LinksSetMerchantOrderInfoListLink              `json:"setMerchantInfos"`
	Status             LinksGetMarketplaceAccountsSynchronizationLink `json:"status"`
}
