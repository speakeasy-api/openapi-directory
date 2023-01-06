package shared

import (
	"time"
)

// OrderHeader
// Describe the basic information related to an order. All properties with the prefix order_ are translated in the list of values /user/lov/OrderMetaInfoOrderDetails
type OrderHeader struct {
	AccountID                               int32            `json:"accountId"`
	BeezUPOrderID                           string           `json:"beezUPOrderId"`
	BeezUPOrderURL                          *string          `json:"beezUPOrderUrl,omitempty"`
	Etag                                    string           `json:"etag"`
	Links                                   OrderHeaderLinks `json:"links"`
	MarketplaceBusinessCode                 string           `json:"marketplaceBusinessCode"`
	MarketplaceTechnicalCode                string           `json:"marketplaceTechnicalCode"`
	OrderBuyerName                          *string          `json:"order_Buyer_Name,omitempty"`
	OrderCurrencyCode                       *string          `json:"order_CurrencyCode,omitempty"`
	OrderInvoiceNumber                      *string          `json:"order_Invoice_Number,omitempty"`
	OrderInvoiceURI                         *string          `json:"order_Invoice_Uri,omitempty"`
	OrderLastModificationUtcDate            time.Time        `json:"order_LastModificationUtcDate"`
	OrderMarketplaceLastModificationUtcDate time.Time        `json:"order_MarketplaceLastModificationUtcDate"`
	OrderMarketplaceOrderID                 string           `json:"order_MarketplaceOrderId"`
	OrderMerchantECommerceSoftwareName      *string          `json:"order_MerchantECommerceSoftwareName,omitempty"`
	OrderMerchantECommerceSoftwareVersion   *string          `json:"order_MerchantECommerceSoftwareVersion,omitempty"`
	OrderMerchantOrderID                    *string          `json:"order_MerchantOrderId,omitempty"`
	OrderPurchaseUtcDate                    time.Time        `json:"order_PurchaseUtcDate"`
	OrderStatusBeezUPOrderStatus            string           `json:"order_Status_BeezUPOrderStatus"`
	OrderStatusMarketplaceOrderStatus       *string          `json:"order_Status_MarketplaceOrderStatus,omitempty"`
	OrderTotalPrice                         *float64         `json:"order_TotalPrice,omitempty"`
	Processing                              bool             `json:"processing"`
}
