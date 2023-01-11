package openapisdk.models.shared;



public class DescribeDataSharesResult {
    public DataShare[] dataShares;
    public DescribeDataSharesResult withDataShares(DataShare[] dataShares) {
        this.dataShares = dataShares;
        return this;
    }
    public String marker;
    public DescribeDataSharesResult withMarker(String marker) {
        this.marker = marker;
        return this;
    }
}