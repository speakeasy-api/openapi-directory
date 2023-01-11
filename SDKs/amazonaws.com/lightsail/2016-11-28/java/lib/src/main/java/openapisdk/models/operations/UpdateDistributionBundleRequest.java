package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateDistributionBundleRequest {
    public UpdateDistributionBundleHeaders headers;
    public UpdateDistributionBundleRequest withHeaders(UpdateDistributionBundleHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateDistributionBundleRequest request;
    public UpdateDistributionBundleRequest withRequest(openapisdk.models.shared.UpdateDistributionBundleRequest request) {
        this.request = request;
        return this;
    }
}