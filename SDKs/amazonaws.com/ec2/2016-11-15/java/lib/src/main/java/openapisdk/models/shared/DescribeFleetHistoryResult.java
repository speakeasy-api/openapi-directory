package openapisdk.models.shared;



public class DescribeFleetHistoryResult {
    public java.util.Map<String, Object> fleetId;
    public DescribeFleetHistoryResult withFleetId(java.util.Map<String, Object> fleetId) {
        this.fleetId = fleetId;
        return this;
    }
    public java.util.Map<String, Object> historyRecords;
    public DescribeFleetHistoryResult withHistoryRecords(java.util.Map<String, Object> historyRecords) {
        this.historyRecords = historyRecords;
        return this;
    }
    public java.util.Map<String, Object> lastEvaluatedTime;
    public DescribeFleetHistoryResult withLastEvaluatedTime(java.util.Map<String, Object> lastEvaluatedTime) {
        this.lastEvaluatedTime = lastEvaluatedTime;
        return this;
    }
    public java.util.Map<String, Object> nextToken;
    public DescribeFleetHistoryResult withNextToken(java.util.Map<String, Object> nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    public java.util.Map<String, Object> startTime;
    public DescribeFleetHistoryResult withStartTime(java.util.Map<String, Object> startTime) {
        this.startTime = startTime;
        return this;
    }
}