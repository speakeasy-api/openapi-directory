package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeTrustsRequest {
    public DescribeTrustsHeaders headers;
    public DescribeTrustsRequest withHeaders(DescribeTrustsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeTrustsRequest request;
    public DescribeTrustsRequest withRequest(openapisdk.models.shared.DescribeTrustsRequest request) {
        this.request = request;
        return this;
    }
}