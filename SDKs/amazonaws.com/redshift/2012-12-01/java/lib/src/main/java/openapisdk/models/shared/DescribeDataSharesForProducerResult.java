package openapisdk.models.shared;



public class DescribeDataSharesForProducerResult {
    public DataShare[] dataShares;
    public DescribeDataSharesForProducerResult withDataShares(DataShare[] dataShares) {
        this.dataShares = dataShares;
        return this;
    }
    public String marker;
    public DescribeDataSharesForProducerResult withMarker(String marker) {
        this.marker = marker;
        return this;
    }
}