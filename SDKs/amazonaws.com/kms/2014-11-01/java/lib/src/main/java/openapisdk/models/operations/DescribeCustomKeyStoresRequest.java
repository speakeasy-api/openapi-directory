package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeCustomKeyStoresRequest {
    public DescribeCustomKeyStoresHeaders headers;
    public DescribeCustomKeyStoresRequest withHeaders(DescribeCustomKeyStoresHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeCustomKeyStoresRequest request;
    public DescribeCustomKeyStoresRequest withRequest(openapisdk.models.shared.DescribeCustomKeyStoresRequest request) {
        this.request = request;
        return this;
    }
}