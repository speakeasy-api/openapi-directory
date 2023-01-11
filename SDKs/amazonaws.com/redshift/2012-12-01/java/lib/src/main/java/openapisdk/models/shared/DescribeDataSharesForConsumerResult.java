package openapisdk.models.shared;



public class DescribeDataSharesForConsumerResult {
    public DataShare[] dataShares;
    public DescribeDataSharesForConsumerResult withDataShares(DataShare[] dataShares) {
        this.dataShares = dataShares;
        return this;
    }
    public String marker;
    public DescribeDataSharesForConsumerResult withMarker(String marker) {
        this.marker = marker;
        return this;
    }
}