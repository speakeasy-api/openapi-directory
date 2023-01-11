package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeProblemRequest {
    public DescribeProblemHeaders headers;
    public DescribeProblemRequest withHeaders(DescribeProblemHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeProblemRequest request;
    public DescribeProblemRequest withRequest(openapisdk.models.shared.DescribeProblemRequest request) {
        this.request = request;
        return this;
    }
}