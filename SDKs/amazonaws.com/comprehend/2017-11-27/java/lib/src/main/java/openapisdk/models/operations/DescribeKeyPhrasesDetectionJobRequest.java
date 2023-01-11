package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeKeyPhrasesDetectionJobRequest {
    public DescribeKeyPhrasesDetectionJobHeaders headers;
    public DescribeKeyPhrasesDetectionJobRequest withHeaders(DescribeKeyPhrasesDetectionJobHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeKeyPhrasesDetectionJobRequest request;
    public DescribeKeyPhrasesDetectionJobRequest withRequest(openapisdk.models.shared.DescribeKeyPhrasesDetectionJobRequest request) {
        this.request = request;
        return this;
    }
}