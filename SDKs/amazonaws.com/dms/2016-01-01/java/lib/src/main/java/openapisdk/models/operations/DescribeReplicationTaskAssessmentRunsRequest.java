package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeReplicationTaskAssessmentRunsRequest {
    public DescribeReplicationTaskAssessmentRunsQueryParams queryParams;
    public DescribeReplicationTaskAssessmentRunsRequest withQueryParams(DescribeReplicationTaskAssessmentRunsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DescribeReplicationTaskAssessmentRunsHeaders headers;
    public DescribeReplicationTaskAssessmentRunsRequest withHeaders(DescribeReplicationTaskAssessmentRunsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeReplicationTaskAssessmentRunsMessage request;
    public DescribeReplicationTaskAssessmentRunsRequest withRequest(openapisdk.models.shared.DescribeReplicationTaskAssessmentRunsMessage request) {
        this.request = request;
        return this;
    }
}