package shared

import (
	"time"
)

type OrderListRequestWithoutPagination struct {
	AccountIds                             []int32             `json:"accountIds,omitempty"`
	BeezUPOrderStatuses                    []string            `json:"beezUPOrderStatuses,omitempty"`
	BeginPeriodUtcDate                     time.Time           `json:"beginPeriodUtcDate"`
	DateSearchType                         *DateSearchTypeEnum `json:"dateSearchType,omitempty"`
	EndPeriodUtcDate                       time.Time           `json:"endPeriodUtcDate"`
	InvoiceAvailabilityType                *string             `json:"invoiceAvailabilityType,omitempty"`
	MarketplaceBusinessCodes               []string            `json:"marketplaceBusinessCodes,omitempty"`
	MarketplaceOrderIds                    []string            `json:"marketplaceOrderIds,omitempty"`
	MarketplaceTechnicalCodes              []string            `json:"marketplaceTechnicalCodes,omitempty"`
	OrderMerchantInfoSynchronizationStatus *string             `json:"orderMerchantInfoSynchronizationStatus,omitempty"`
	OrderBuyerName                         *string             `json:"order_Buyer_Name,omitempty"`
	OrderMerchantOrderIds                  []string            `json:"order_MerchantOrderIds,omitempty"`
	StoreIds                               []string            `json:"storeIds,omitempty"`
}
