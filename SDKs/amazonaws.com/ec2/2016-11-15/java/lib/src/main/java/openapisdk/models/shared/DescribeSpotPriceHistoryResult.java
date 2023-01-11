package openapisdk.models.shared;



/**
 * DescribeSpotPriceHistoryResult
 * Contains the output of DescribeSpotPriceHistory.
**/
public class DescribeSpotPriceHistoryResult {
    public java.util.Map<String, Object> nextToken;
    public DescribeSpotPriceHistoryResult withNextToken(java.util.Map<String, Object> nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    public java.util.Map<String, Object> spotPriceHistory;
    public DescribeSpotPriceHistoryResult withSpotPriceHistory(java.util.Map<String, Object> spotPriceHistory) {
        this.spotPriceHistory = spotPriceHistory;
        return this;
    }
}