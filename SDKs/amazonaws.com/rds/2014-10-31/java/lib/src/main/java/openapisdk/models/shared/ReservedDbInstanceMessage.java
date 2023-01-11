package openapisdk.models.shared;



/**
 * ReservedDbInstanceMessage
 *  Contains the result of a successful invocation of the <code>DescribeReservedDBInstances</code> action. 
**/
public class ReservedDbInstanceMessage {
    public String marker;
    public ReservedDbInstanceMessage withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    public ReservedDbInstanceList[] reservedDBInstances;
    public ReservedDbInstanceMessage withReservedDbInstances(ReservedDbInstanceList[] reservedDBInstances) {
        this.reservedDBInstances = reservedDBInstances;
        return this;
    }
}