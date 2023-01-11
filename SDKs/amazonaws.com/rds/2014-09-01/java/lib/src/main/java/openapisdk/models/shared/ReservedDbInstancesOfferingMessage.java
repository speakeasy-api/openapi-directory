package openapisdk.models.shared;



public class ReservedDbInstancesOfferingMessage {
    public String marker;
    public ReservedDbInstancesOfferingMessage withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    public ReservedDbInstancesOfferingList[] reservedDBInstancesOfferings;
    public ReservedDbInstancesOfferingMessage withReservedDbInstancesOfferings(ReservedDbInstancesOfferingList[] reservedDBInstancesOfferings) {
        this.reservedDBInstancesOfferings = reservedDBInstancesOfferings;
        return this;
    }
}