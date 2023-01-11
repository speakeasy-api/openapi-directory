package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteDistributionRequest {
    public DeleteDistributionHeaders headers;
    public DeleteDistributionRequest withHeaders(DeleteDistributionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteDistributionRequest request;
    public DeleteDistributionRequest withRequest(openapisdk.models.shared.DeleteDistributionRequest request) {
        this.request = request;
        return this;
    }
}