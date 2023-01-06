package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetOrdersQueryParams struct {
	FromDate     string                    `queryParam:"style=form,explode=true,name=fromDate"`
	Hydrate      []shared.HydrateParamEnum `queryParam:"style=form,explode=false,name=hydrate"`
	Limit        *int64                    `queryParam:"style=form,explode=true,name=limit"`
	MerchantIds  []int64                   `queryParam:"style=form,explode=false,name=merchantIds"`
	Page         *int64                    `queryParam:"style=form,explode=true,name=page"`
	ToDate       string                    `queryParam:"style=form,explode=true,name=toDate"`
	WarehouseIds []int64                   `queryParam:"style=form,explode=false,name=warehouseIds"`
}

type GetOrdersSecurity struct {
	FdcAuth shared.SchemeFdcAuth `security:"scheme,type=oauth2"`
}

type GetOrdersErrorStandardV2 struct {
	Message *string `json:"message,omitempty"`
}

type GetOrders200ApplicationJSONOrderResponseV2LineItemsResponseV2InventoryDetails struct {
	ExpirationDate *time.Time `json:"expirationDate,omitempty"`
	LotNum         *string    `json:"lotNum,omitempty"`
	Quantity       *int64     `json:"quantity,omitempty"`
	SerialNum      *string    `json:"serialNum,omitempty"`
}

type GetOrders200ApplicationJSONOrderResponseV2LineItemsResponseV2LineDetails struct {
	Description   *string `json:"description,omitempty"`
	ExternalSku   *string `json:"externalSku,omitempty"`
	ID            *int64  `json:"id,omitempty"`
	Name          *string `json:"name,omitempty"`
	TotalQuantity *int64  `json:"totalQuantity,omitempty"`
}

type GetOrders200ApplicationJSONOrderResponseV2LineItemsResponseV2RequestedSkuData struct {
	DeclaredValue *string `json:"declaredValue,omitempty"`
	ID            *int64  `json:"id,omitempty"`
	Quantity      *int64  `json:"quantity,omitempty"`
	Sku           *string `json:"sku,omitempty"`
}

type GetOrders200ApplicationJSONOrderResponseV2LineItemsResponseV2 struct {
	ID               *int64                                                                          `json:"id,omitempty"`
	InventoryDetails []GetOrders200ApplicationJSONOrderResponseV2LineItemsResponseV2InventoryDetails `json:"inventoryDetails,omitempty"`
	LineDetails      *GetOrders200ApplicationJSONOrderResponseV2LineItemsResponseV2LineDetails       `json:"lineDetails,omitempty"`
	RequestedSkuData *GetOrders200ApplicationJSONOrderResponseV2LineItemsResponseV2RequestedSkuData  `json:"requestedSkuData,omitempty"`
}

type GetOrders200ApplicationJSONOrderResponseV2TrackingNumbersCarrierHydratedV2 struct {
	CanReprintPostage  *bool  `json:"canReprintPostage,omitempty"`
	Enabled            *bool  `json:"enabled,omitempty"`
	ID                 int64  `json:"id"`
	IncludePeripherals *bool  `json:"includePeripherals,omitempty"`
	InternalRatesOnly  *bool  `json:"internalRatesOnly,omitempty"`
	Name               string `json:"name"`
	RequiresDimensions *bool  `json:"requiresDimensions,omitempty"`
	Symbol             string `json:"symbol"`
}

type GetOrders200ApplicationJSONOrderResponseV2TrackingNumbers struct {
	Carrier *GetOrders200ApplicationJSONOrderResponseV2TrackingNumbersCarrierHydratedV2 `json:"carrier,omitempty"`
}

// GetOrders200ApplicationJSONOrderResponseV2
// Requires hydrate to be set in the request and the corresponding node will be filled.
type GetOrders200ApplicationJSONOrderResponseV2 struct {
	Integrator      *string                                                         `json:"integrator,omitempty"`
	LineItems       []GetOrders200ApplicationJSONOrderResponseV2LineItemsResponseV2 `json:"lineItems,omitempty"`
	TrackingNumbers []GetOrders200ApplicationJSONOrderResponseV2TrackingNumbers     `json:"trackingNumbers,omitempty"`
}

type GetOrdersRequest struct {
	QueryParams GetOrdersQueryParams
	Security    GetOrdersSecurity
}

type GetOrdersResponse struct {
	ContentType          string
	ErrorStandardV2      *GetOrdersErrorStandardV2
	OrderResponseOneOfV2 *interface{}
	StatusCode           int64
}
