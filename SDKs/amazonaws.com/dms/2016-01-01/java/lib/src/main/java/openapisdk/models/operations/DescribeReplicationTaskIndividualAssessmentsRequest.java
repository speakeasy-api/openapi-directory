package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeReplicationTaskIndividualAssessmentsRequest {
    public DescribeReplicationTaskIndividualAssessmentsQueryParams queryParams;
    public DescribeReplicationTaskIndividualAssessmentsRequest withQueryParams(DescribeReplicationTaskIndividualAssessmentsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DescribeReplicationTaskIndividualAssessmentsHeaders headers;
    public DescribeReplicationTaskIndividualAssessmentsRequest withHeaders(DescribeReplicationTaskIndividualAssessmentsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeReplicationTaskIndividualAssessmentsMessage request;
    public DescribeReplicationTaskIndividualAssessmentsRequest withRequest(openapisdk.models.shared.DescribeReplicationTaskIndividualAssessmentsMessage request) {
        this.request = request;
        return this;
    }
}