package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeSolutionRequest {
    public DescribeSolutionHeaders headers;
    public DescribeSolutionRequest withHeaders(DescribeSolutionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeSolutionRequest request;
    public DescribeSolutionRequest withRequest(openapisdk.models.shared.DescribeSolutionRequest request) {
        this.request = request;
        return this;
    }
}