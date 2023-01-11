package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeAttackStatisticsRequest {
    public DescribeAttackStatisticsHeaders headers;
    public DescribeAttackStatisticsRequest withHeaders(DescribeAttackStatisticsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public DescribeAttackStatisticsRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}