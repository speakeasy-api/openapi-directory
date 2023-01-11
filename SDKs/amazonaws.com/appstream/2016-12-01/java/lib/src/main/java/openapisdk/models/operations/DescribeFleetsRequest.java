package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeFleetsRequest {
    public DescribeFleetsHeaders headers;
    public DescribeFleetsRequest withHeaders(DescribeFleetsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeFleetsRequest request;
    public DescribeFleetsRequest withRequest(openapisdk.models.shared.DescribeFleetsRequest request) {
        this.request = request;
        return this;
    }
}