package openapisdk.models.shared;



/**
 * DescribeReservedInstancesModificationsResult
 * Contains the output of DescribeReservedInstancesModifications.
**/
public class DescribeReservedInstancesModificationsResult {
    public java.util.Map<String, Object> nextToken;
    public DescribeReservedInstancesModificationsResult withNextToken(java.util.Map<String, Object> nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    public java.util.Map<String, Object> reservedInstancesModifications;
    public DescribeReservedInstancesModificationsResult withReservedInstancesModifications(java.util.Map<String, Object> reservedInstancesModifications) {
        this.reservedInstancesModifications = reservedInstancesModifications;
        return this;
    }
}