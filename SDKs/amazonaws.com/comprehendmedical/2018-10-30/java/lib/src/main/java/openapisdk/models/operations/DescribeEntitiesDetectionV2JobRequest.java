package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeEntitiesDetectionV2JobRequest {
    public DescribeEntitiesDetectionV2JobHeaders headers;
    public DescribeEntitiesDetectionV2JobRequest withHeaders(DescribeEntitiesDetectionV2JobHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeEntitiesDetectionV2JobRequest request;
    public DescribeEntitiesDetectionV2JobRequest withRequest(openapisdk.models.shared.DescribeEntitiesDetectionV2JobRequest request) {
        this.request = request;
        return this;
    }
}