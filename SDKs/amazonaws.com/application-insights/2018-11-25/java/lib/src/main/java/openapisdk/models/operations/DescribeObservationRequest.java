package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeObservationRequest {
    public DescribeObservationHeaders headers;
    public DescribeObservationRequest withHeaders(DescribeObservationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeObservationRequest request;
    public DescribeObservationRequest withRequest(openapisdk.models.shared.DescribeObservationRequest request) {
        this.request = request;
        return this;
    }
}