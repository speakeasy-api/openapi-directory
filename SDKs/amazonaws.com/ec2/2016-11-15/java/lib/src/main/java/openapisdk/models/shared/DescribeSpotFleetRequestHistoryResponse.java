package openapisdk.models.shared;



/**
 * DescribeSpotFleetRequestHistoryResponse
 * Contains the output of DescribeSpotFleetRequestHistory.
**/
public class DescribeSpotFleetRequestHistoryResponse {
    public java.util.Map<String, Object> historyRecords;
    public DescribeSpotFleetRequestHistoryResponse withHistoryRecords(java.util.Map<String, Object> historyRecords) {
        this.historyRecords = historyRecords;
        return this;
    }
    public java.util.Map<String, Object> lastEvaluatedTime;
    public DescribeSpotFleetRequestHistoryResponse withLastEvaluatedTime(java.util.Map<String, Object> lastEvaluatedTime) {
        this.lastEvaluatedTime = lastEvaluatedTime;
        return this;
    }
    public java.util.Map<String, Object> nextToken;
    public DescribeSpotFleetRequestHistoryResponse withNextToken(java.util.Map<String, Object> nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    public java.util.Map<String, Object> spotFleetRequestId;
    public DescribeSpotFleetRequestHistoryResponse withSpotFleetRequestId(java.util.Map<String, Object> spotFleetRequestId) {
        this.spotFleetRequestId = spotFleetRequestId;
        return this;
    }
    public java.util.Map<String, Object> startTime;
    public DescribeSpotFleetRequestHistoryResponse withStartTime(java.util.Map<String, Object> startTime) {
        this.startTime = startTime;
        return this;
    }
}