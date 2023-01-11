package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeLagsRequest {
    public DescribeLagsHeaders headers;
    public DescribeLagsRequest withHeaders(DescribeLagsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeLagsRequest request;
    public DescribeLagsRequest withRequest(openapisdk.models.shared.DescribeLagsRequest request) {
        this.request = request;
        return this;
    }
}