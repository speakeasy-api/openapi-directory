package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeReplicationTaskAssessmentResultsRequest {
    public DescribeReplicationTaskAssessmentResultsQueryParams queryParams;
    public DescribeReplicationTaskAssessmentResultsRequest withQueryParams(DescribeReplicationTaskAssessmentResultsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DescribeReplicationTaskAssessmentResultsHeaders headers;
    public DescribeReplicationTaskAssessmentResultsRequest withHeaders(DescribeReplicationTaskAssessmentResultsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeReplicationTaskAssessmentResultsMessage request;
    public DescribeReplicationTaskAssessmentResultsRequest withRequest(openapisdk.models.shared.DescribeReplicationTaskAssessmentResultsMessage request) {
        this.request = request;
        return this;
    }
}