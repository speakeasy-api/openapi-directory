package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeCopyProductStatusRequest {
    public DescribeCopyProductStatusHeaders headers;
    public DescribeCopyProductStatusRequest withHeaders(DescribeCopyProductStatusHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeCopyProductStatusInput request;
    public DescribeCopyProductStatusRequest withRequest(openapisdk.models.shared.DescribeCopyProductStatusInput request) {
        this.request = request;
        return this;
    }
}