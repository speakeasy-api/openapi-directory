package openapisdk.models.shared;



/**
 * DescribeReservedInstancesOfferingsResult
 * Contains the output of DescribeReservedInstancesOfferings.
**/
public class DescribeReservedInstancesOfferingsResult {
    public java.util.Map<String, Object> nextToken;
    public DescribeReservedInstancesOfferingsResult withNextToken(java.util.Map<String, Object> nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    public java.util.Map<String, Object> reservedInstancesOfferings;
    public DescribeReservedInstancesOfferingsResult withReservedInstancesOfferings(java.util.Map<String, Object> reservedInstancesOfferings) {
        this.reservedInstancesOfferings = reservedInstancesOfferings;
        return this;
    }
}