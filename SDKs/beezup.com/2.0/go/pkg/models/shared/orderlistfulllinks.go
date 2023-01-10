package shared

// OrderListFullLinks
// The list of actions you can do from the order list response
type OrderListFullLinks struct {
	ClearMerchantInfos LinksClearMerchantOrderInfoListLink            `json:"clearMerchantInfos"`
	Export             LinksExportOrdersLink                          `json:"export"`
	Harvest            LinksHarvestAllLink                            `json:"harvest"`
	Self               LinksGetOrderListFullLink                      `json:"self"`
	SetMerchantInfos   LinksSetMerchantOrderInfoListLink              `json:"setMerchantInfos"`
	Status             LinksGetMarketplaceAccountsSynchronizationLink `json:"status"`
}
