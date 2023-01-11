package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeSecretRequest {
    public DescribeSecretHeaders headers;
    public DescribeSecretRequest withHeaders(DescribeSecretHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeSecretRequest request;
    public DescribeSecretRequest withRequest(openapisdk.models.shared.DescribeSecretRequest request) {
        this.request = request;
        return this;
    }
}