package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateDistributionRequest {
    public CreateDistributionHeaders headers;
    public CreateDistributionRequest withHeaders(CreateDistributionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateDistributionRequest request;
    public CreateDistributionRequest withRequest(openapisdk.models.shared.CreateDistributionRequest request) {
        this.request = request;
        return this;
    }
}