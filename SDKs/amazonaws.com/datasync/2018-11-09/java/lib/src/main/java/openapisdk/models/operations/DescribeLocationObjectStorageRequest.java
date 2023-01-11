package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeLocationObjectStorageRequest {
    public DescribeLocationObjectStorageHeaders headers;
    public DescribeLocationObjectStorageRequest withHeaders(DescribeLocationObjectStorageHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeLocationObjectStorageRequest request;
    public DescribeLocationObjectStorageRequest withRequest(openapisdk.models.shared.DescribeLocationObjectStorageRequest request) {
        this.request = request;
        return this;
    }
}