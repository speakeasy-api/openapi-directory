package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeSolutionVersionRequest {
    public DescribeSolutionVersionHeaders headers;
    public DescribeSolutionVersionRequest withHeaders(DescribeSolutionVersionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeSolutionVersionRequest request;
    public DescribeSolutionVersionRequest withRequest(openapisdk.models.shared.DescribeSolutionVersionRequest request) {
        this.request = request;
        return this;
    }
}