package openapisdk.models.shared;



/**
 * DescribeReservedInstancesResult
 * Contains the output for DescribeReservedInstances.
**/
public class DescribeReservedInstancesResult {
    public java.util.Map<String, Object> reservedInstances;
    public DescribeReservedInstancesResult withReservedInstances(java.util.Map<String, Object> reservedInstances) {
        this.reservedInstances = reservedInstances;
        return this;
    }
}