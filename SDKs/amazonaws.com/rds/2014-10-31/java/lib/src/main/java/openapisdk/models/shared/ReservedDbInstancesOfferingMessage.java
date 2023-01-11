package openapisdk.models.shared;



/**
 * ReservedDbInstancesOfferingMessage
 *  Contains the result of a successful invocation of the <code>DescribeReservedDBInstancesOfferings</code> action. 
**/
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