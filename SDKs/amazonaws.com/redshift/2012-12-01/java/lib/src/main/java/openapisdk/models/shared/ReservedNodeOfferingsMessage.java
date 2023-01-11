package openapisdk.models.shared;



/**
 * ReservedNodeOfferingsMessage
 * <p/>
**/
public class ReservedNodeOfferingsMessage {
    public String marker;
    public ReservedNodeOfferingsMessage withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    public ReservedNodeOfferingList[] reservedNodeOfferings;
    public ReservedNodeOfferingsMessage withReservedNodeOfferings(ReservedNodeOfferingList[] reservedNodeOfferings) {
        this.reservedNodeOfferings = reservedNodeOfferings;
        return this;
    }
}