package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateServicePrimaryTaskSetRequest {
    public UpdateServicePrimaryTaskSetHeaders headers;
    public UpdateServicePrimaryTaskSetRequest withHeaders(UpdateServicePrimaryTaskSetHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateServicePrimaryTaskSetRequest request;
    public UpdateServicePrimaryTaskSetRequest withRequest(openapisdk.models.shared.UpdateServicePrimaryTaskSetRequest request) {
        this.request = request;
        return this;
    }
}