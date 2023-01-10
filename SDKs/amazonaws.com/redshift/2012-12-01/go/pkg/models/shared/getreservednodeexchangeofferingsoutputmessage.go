package shared

type GetReservedNodeExchangeOfferingsOutputMessage struct {
	Marker                *string
	ReservedNodeOfferings []ReservedNodeOfferingList
}
