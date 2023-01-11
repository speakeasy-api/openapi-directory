package openapisdk.models.shared;



public class DescribeMovingAddressesResult {
    public java.util.Map<String, Object> movingAddressStatuses;
    public DescribeMovingAddressesResult withMovingAddressStatuses(java.util.Map<String, Object> movingAddressStatuses) {
        this.movingAddressStatuses = movingAddressStatuses;
        return this;
    }
    public java.util.Map<String, Object> nextToken;
    public DescribeMovingAddressesResult withNextToken(java.util.Map<String, Object> nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}