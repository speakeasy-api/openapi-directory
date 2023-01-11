package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeDimensionKeysRequest {
    public DescribeDimensionKeysHeaders headers;
    public DescribeDimensionKeysRequest withHeaders(DescribeDimensionKeysHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeDimensionKeysRequest request;
    public DescribeDimensionKeysRequest withRequest(openapisdk.models.shared.DescribeDimensionKeysRequest request) {
        this.request = request;
        return this;
    }
}