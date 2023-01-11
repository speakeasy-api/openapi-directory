package openapisdk.models.shared;



public class GetReservedNodeExchangeOfferingsOutputMessage {
    public String marker;
    public GetReservedNodeExchangeOfferingsOutputMessage withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    public ReservedNodeOfferingList[] reservedNodeOfferings;
    public GetReservedNodeExchangeOfferingsOutputMessage withReservedNodeOfferings(ReservedNodeOfferingList[] reservedNodeOfferings) {
        this.reservedNodeOfferings = reservedNodeOfferings;
        return this;
    }
}