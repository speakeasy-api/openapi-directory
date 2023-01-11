package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeRecommendationExportJobsRequest {
    public DescribeRecommendationExportJobsHeaders headers;
    public DescribeRecommendationExportJobsRequest withHeaders(DescribeRecommendationExportJobsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeRecommendationExportJobsRequest request;
    public DescribeRecommendationExportJobsRequest withRequest(openapisdk.models.shared.DescribeRecommendationExportJobsRequest request) {
        this.request = request;
        return this;
    }
}