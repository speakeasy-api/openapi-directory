package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeFindingsRequest {
    public DescribeFindingsHeaders headers;
    public DescribeFindingsRequest withHeaders(DescribeFindingsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeFindingsRequest request;
    public DescribeFindingsRequest withRequest(openapisdk.models.shared.DescribeFindingsRequest request) {
        this.request = request;
        return this;
    }
}