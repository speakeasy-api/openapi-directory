package openapisdk.models.shared;



public class DescribeInstancesResult {
    public java.util.Map<String, Object> nextToken;
    public DescribeInstancesResult withNextToken(java.util.Map<String, Object> nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    public java.util.Map<String, Object> reservations;
    public DescribeInstancesResult withReservations(java.util.Map<String, Object> reservations) {
        this.reservations = reservations;
        return this;
    }
}