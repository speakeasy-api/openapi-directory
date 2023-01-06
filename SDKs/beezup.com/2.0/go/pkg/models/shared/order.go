package shared

import (
	"time"
)

// Order
// Describe in details all informations related to an order. All properties with the prefix order_ are translated in the list of values /user/lov/OrderMetaInfoOrderDetails.
type Order struct {
	Links                                    OrderLinks             `json:"links"`
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
	OrderBuyerPhone                          *string                `json:"order_Buyer_Phone,omitempty"`
	OrderComment                             *string                `json:"order_Comment,omitempty"`
	OrderFulfilledBy                         *string                `json:"order_FulfilledBy,omitempty"`
	OrderIsBusiness                          *bool                  `json:"order_IsBusiness,omitempty"`
	OrderIsPrime                             *bool                  `json:"order_IsPrime,omitempty"`
	OrderMarketPlaceChannel                  *string                `json:"order_MarketPlaceChannel,omitempty"`
	OrderOrderItemsSourceURI                 *string                `json:"order_OrderItemsSourceUri,omitempty"`
	OrderOrderSourceURI                      *string                `json:"order_OrderSourceUri,omitempty"`
	OrderPayingUtcDate                       *time.Time             `json:"order_PayingUtcDate,omitempty"`
	OrderPaymentMethod                       *string                `json:"order_PaymentMethod,omitempty"`
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
	OrderTotalCommission                     *float64               `json:"order_TotalCommission,omitempty"`
	OrderTotalTax                            *float64               `json:"order_TotalTax,omitempty"`
	TransitionLinks                          []LinksChangeOrderLink `json:"transitionLinks"`
}
