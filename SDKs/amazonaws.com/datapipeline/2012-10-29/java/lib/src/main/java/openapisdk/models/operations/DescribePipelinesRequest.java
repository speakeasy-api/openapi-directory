package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribePipelinesRequest {
    public DescribePipelinesHeaders headers;
    public DescribePipelinesRequest withHeaders(DescribePipelinesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribePipelinesInput request;
    public DescribePipelinesRequest withRequest(openapisdk.models.shared.DescribePipelinesInput request) {
        this.request = request;
        return this;
    }
}