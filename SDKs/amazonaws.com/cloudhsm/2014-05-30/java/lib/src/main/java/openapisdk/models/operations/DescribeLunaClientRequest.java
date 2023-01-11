package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeLunaClientRequest {
    public DescribeLunaClientHeaders headers;
    public DescribeLunaClientRequest withHeaders(DescribeLunaClientHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeLunaClientRequest request;
    public DescribeLunaClientRequest withRequest(openapisdk.models.shared.DescribeLunaClientRequest request) {
        this.request = request;
        return this;
    }
}