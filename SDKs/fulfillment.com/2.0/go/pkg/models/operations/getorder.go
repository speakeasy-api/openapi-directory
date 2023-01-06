package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetOrderPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetOrderQueryParams struct {
	Hydrate    []shared.HydrateParamEnum `queryParam:"style=form,explode=false,name=hydrate"`
	MerchantID *int64                    `queryParam:"style=form,explode=true,name=merchantId"`
}

type GetOrderSecurity struct {
	FdcAuth shared.SchemeFdcAuth `security:"scheme,type=oauth2"`
}

type GetOrder200ApplicationJSONOrderResponseV2LineItemsResponseV2InventoryDetails struct {
	ExpirationDate *time.Time `json:"expirationDate,omitempty"`
	LotNum         *string    `json:"lotNum,omitempty"`
	Quantity       *int64     `json:"quantity,omitempty"`
	SerialNum      *string    `json:"serialNum,omitempty"`
}

type GetOrder200ApplicationJSONOrderResponseV2LineItemsResponseV2LineDetails struct {
	Description   *string `json:"description,omitempty"`
	ExternalSku   *string `json:"externalSku,omitempty"`
	ID            *int64  `json:"id,omitempty"`
	Name          *string `json:"name,omitempty"`
	TotalQuantity *int64  `json:"totalQuantity,omitempty"`
}

type GetOrder200ApplicationJSONOrderResponseV2LineItemsResponseV2RequestedSkuData struct {
	DeclaredValue *string `json:"declaredValue,omitempty"`
	ID            *int64  `json:"id,omitempty"`
	Quantity      *int64  `json:"quantity,omitempty"`
	Sku           *string `json:"sku,omitempty"`
}

type GetOrder200ApplicationJSONOrderResponseV2LineItemsResponseV2 struct {
	ID               *int64                                                                         `json:"id,omitempty"`
	InventoryDetails []GetOrder200ApplicationJSONOrderResponseV2LineItemsResponseV2InventoryDetails `json:"inventoryDetails,omitempty"`
	LineDetails      *GetOrder200ApplicationJSONOrderResponseV2LineItemsResponseV2LineDetails       `json:"lineDetails,omitempty"`
	RequestedSkuData *GetOrder200ApplicationJSONOrderResponseV2LineItemsResponseV2RequestedSkuData  `json:"requestedSkuData,omitempty"`
}

type GetOrder200ApplicationJSONOrderResponseV2TrackingNumbersCarrierHydratedV2 struct {
	CanReprintPostage  *bool  `json:"canReprintPostage,omitempty"`
	Enabled            *bool  `json:"enabled,omitempty"`
	ID                 int64  `json:"id"`
	IncludePeripherals *bool  `json:"includePeripherals,omitempty"`
	InternalRatesOnly  *bool  `json:"internalRatesOnly,omitempty"`
	Name               string `json:"name"`
	RequiresDimensions *bool  `json:"requiresDimensions,omitempty"`
	Symbol             string `json:"symbol"`
}

type GetOrder200ApplicationJSONOrderResponseV2TrackingNumbers struct {
	Carrier *GetOrder200ApplicationJSONOrderResponseV2TrackingNumbersCarrierHydratedV2 `json:"carrier,omitempty"`
}

// GetOrder200ApplicationJSONOrderResponseV2
// Requires hydrate to be set in the request and the corresponding node will be filled.
type GetOrder200ApplicationJSONOrderResponseV2 struct {
	Integrator      *string                                                        `json:"integrator,omitempty"`
	LineItems       []GetOrder200ApplicationJSONOrderResponseV2LineItemsResponseV2 `json:"lineItems,omitempty"`
	TrackingNumbers []GetOrder200ApplicationJSONOrderResponseV2TrackingNumbers     `json:"trackingNumbers,omitempty"`
}

type GetOrderRequest struct {
	PathParams  GetOrderPathParams
	QueryParams GetOrderQueryParams
	Security    GetOrderSecurity
}

type GetOrderResponse struct {
	ContentType                                           string
	StatusCode                                            int64
	OneordersGetResponses200ContentApplication1jsonSchema *interface{}
}
