package shared

type GetReservedNodeExchangeOfferingsOutputMessage struct {
	Marker                *string
	ReservedNodeOfferings []map[string]interface{}
}
