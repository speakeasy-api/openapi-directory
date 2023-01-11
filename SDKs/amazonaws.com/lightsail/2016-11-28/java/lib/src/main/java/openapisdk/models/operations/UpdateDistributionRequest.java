package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateDistributionRequest {
    public UpdateDistributionHeaders headers;
    public UpdateDistributionRequest withHeaders(UpdateDistributionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateDistributionRequest request;
    public UpdateDistributionRequest withRequest(openapisdk.models.shared.UpdateDistributionRequest request) {
        this.request = request;
        return this;
    }
}