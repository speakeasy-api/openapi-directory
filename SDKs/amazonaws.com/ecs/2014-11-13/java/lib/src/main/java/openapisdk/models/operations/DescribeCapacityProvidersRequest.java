package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeCapacityProvidersRequest {
    public DescribeCapacityProvidersHeaders headers;
    public DescribeCapacityProvidersRequest withHeaders(DescribeCapacityProvidersHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeCapacityProvidersRequest request;
    public DescribeCapacityProvidersRequest withRequest(openapisdk.models.shared.DescribeCapacityProvidersRequest request) {
        this.request = request;
        return this;
    }
}