package shared

import (
	"time"
)

// OrderWithLinks
// Describe in details all informations related to an order. All properties with the prefix order_ are translated in the list of values /user/lov/OrderMetaInfoOrderDetails.
type OrderWithLinks struct {
	AccountID                                int32                  `json:"accountId"`
	BeezUPOrderID                            string                 `json:"beezUPOrderId"`
	BeezUPOrderURL                           *string                `json:"beezUPOrderUrl,omitempty"`
	Etag                                     string                 `json:"etag"`
	Links                                    OrderLinks             `json:"links"`
	MarketplaceBusinessCode                  string                 `json:"marketplaceBusinessCode"`
	MarketplaceTechnicalCode                 string                 `json:"marketplaceTechnicalCode"`
	OrderItems                               []OrderItem            `json:"orderItems"`
	OrderBuyerAddressCity                    *string                `json:"order_Buyer_AddressCity,omitempty"`
	OrderBuyerAddressCountryIsoCodeAlpha2    *string                `json:"order_Buyer_AddressCountryIsoCodeAlpha2,omitempty"`
	OrderBuyerAddressCountryName             *string                `json:"order_Buyer_AddressCountryName,omitempty"`
	OrderBuyerAddressLine1                   *string                `json:"order_Buyer_AddressLine1,omitempty"`
	OrderBuyerAddressLine2                   *string                `json:"order_Buyer_AddressLine2,omitempty"`
	OrderBuyerAddressLine3                   *string                `json:"order_Buyer_AddressLine3,omitempty"`
	OrderBuyerAddressPostalCode              *string                `json:"order_Buyer_AddressPostalCode,omitempty"`
	OrderBuyerAddressStateOrRegion           *string                `json:"order_Buyer_AddressStateOrRegion,omitempty"`
	OrderBuyerCivility                       *string                `json:"order_Buyer_Civility,omitempty"`
	OrderBuyerCompanyName                    *string                `json:"order_Buyer_CompanyName,omitempty"`
	OrderBuyerEmail                          *string                `json:"order_Buyer_Email,omitempty"`
	OrderBuyerFirstName                      *string                `json:"order_Buyer_FirstName,omitempty"`
	OrderBuyerIdentifier                     *string                `json:"order_Buyer_Identifier,omitempty"`
	OrderBuyerLastName                       *string                `json:"order_Buyer_LastName,omitempty"`
	OrderBuyerMobilePhone                    *string                `json:"order_Buyer_MobilePhone,omitempty"`
	OrderBuyerName                           *string                `json:"order_Buyer_Name,omitempty"`
	OrderBuyerPhone                          *string                `json:"order_Buyer_Phone,omitempty"`
	OrderComment                             *string                `json:"order_Comment,omitempty"`
	OrderCurrencyCode                        *string                `json:"order_CurrencyCode,omitempty"`
	OrderFulfilledBy                         *string                `json:"order_FulfilledBy,omitempty"`
	OrderInvoiceNumber                       *string                `json:"order_Invoice_Number,omitempty"`
	OrderInvoiceURI                          *string                `json:"order_Invoice_Uri,omitempty"`
	OrderIsBusiness                          *bool                  `json:"order_IsBusiness,omitempty"`
	OrderIsPrime                             *bool                  `json:"order_IsPrime,omitempty"`
	OrderLastModificationUtcDate             time.Time              `json:"order_LastModificationUtcDate"`
	OrderMarketPlaceChannel                  *string                `json:"order_MarketPlaceChannel,omitempty"`
	OrderMarketplaceLastModificationUtcDate  time.Time              `json:"order_MarketplaceLastModificationUtcDate"`
	OrderMarketplaceOrderID                  string                 `json:"order_MarketplaceOrderId"`
	OrderMerchantECommerceSoftwareName       *string                `json:"order_MerchantECommerceSoftwareName,omitempty"`
	OrderMerchantECommerceSoftwareVersion    *string                `json:"order_MerchantECommerceSoftwareVersion,omitempty"`
	OrderMerchantOrderID                     *string                `json:"order_MerchantOrderId,omitempty"`
	OrderOrderItemsSourceURI                 *string                `json:"order_OrderItemsSourceUri,omitempty"`
	OrderOrderSourceURI                      *string                `json:"order_OrderSourceUri,omitempty"`
	OrderPayingUtcDate                       *time.Time             `json:"order_PayingUtcDate,omitempty"`
	OrderPaymentMethod                       *string                `json:"order_PaymentMethod,omitempty"`
	OrderPurchaseUtcDate                     time.Time              `json:"order_PurchaseUtcDate"`
	OrderShippingAddressCity                 *string                `json:"order_Shipping_AddressCity,omitempty"`
	OrderShippingAddressCountryIsoCodeAlpha2 *string                `json:"order_Shipping_AddressCountryIsoCodeAlpha2,omitempty"`
	OrderShippingAddressCountryName          *string                `json:"order_Shipping_AddressCountryName,omitempty"`
	OrderShippingAddressLine1                *string                `json:"order_Shipping_AddressLine1,omitempty"`
	OrderShippingAddressLine2                *string                `json:"order_Shipping_AddressLine2,omitempty"`
	OrderShippingAddressLine3                *string                `json:"order_Shipping_AddressLine3,omitempty"`
	OrderShippingAddressName                 *string                `json:"order_Shipping_AddressName,omitempty"`
	OrderShippingAddressPostalCode           *string                `json:"order_Shipping_AddressPostalCode,omitempty"`
	OrderShippingAddressStateOrRegion        *string                `json:"order_Shipping_AddressStateOrRegion,omitempty"`
	OrderShippingCivility                    *string                `json:"order_Shipping_Civility,omitempty"`
	OrderShippingCompanyName                 *string                `json:"order_Shipping_CompanyName,omitempty"`
	OrderShippingEarliestShipUtcDate         *time.Time             `json:"order_Shipping_EarliestShipUtcDate,omitempty"`
	OrderShippingEmail                       *string                `json:"order_Shipping_Email,omitempty"`
	OrderShippingFirstName                   *string                `json:"order_Shipping_FirstName,omitempty"`
	OrderShippingLastName                    *string                `json:"order_Shipping_LastName,omitempty"`
	OrderShippingLatestShipUtcDate           *time.Time             `json:"order_Shipping_LatestShipUtcDate,omitempty"`
	OrderShippingMethod                      *string                `json:"order_Shipping_Method,omitempty"`
	OrderShippingMobilePhone                 *string                `json:"order_Shipping_MobilePhone,omitempty"`
	OrderShippingPhone                       *string                `json:"order_Shipping_Phone,omitempty"`
	OrderShippingPrice                       *float64               `json:"order_Shipping_Price,omitempty"`
	OrderShippingShippingTax                 *float64               `json:"order_Shipping_ShippingTax,omitempty"`
	OrderStatusBeezUPOrderStatus             string                 `json:"order_Status_BeezUPOrderStatus"`
	OrderStatusMarketplaceOrderStatus        *string                `json:"order_Status_MarketplaceOrderStatus,omitempty"`
	OrderTotalCommission                     *float64               `json:"order_TotalCommission,omitempty"`
	OrderTotalPrice                          *float64               `json:"order_TotalPrice,omitempty"`
	OrderTotalTax                            *float64               `json:"order_TotalTax,omitempty"`
	Processing                               bool                   `json:"processing"`
	TransitionLinks                          []LinksChangeOrderLink `json:"transitionLinks"`
}
