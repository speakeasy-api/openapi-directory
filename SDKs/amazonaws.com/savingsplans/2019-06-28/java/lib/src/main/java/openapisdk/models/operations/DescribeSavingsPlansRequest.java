package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeSavingsPlansRequest {
    public DescribeSavingsPlansHeaders headers;
    public DescribeSavingsPlansRequest withHeaders(DescribeSavingsPlansHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public DescribeSavingsPlansRequestBody request;
    public DescribeSavingsPlansRequest withRequest(DescribeSavingsPlansRequestBody request) {
        this.request = request;
        return this;
    }
}