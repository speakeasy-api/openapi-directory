package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateServerEngineAttributesRequest {
    public UpdateServerEngineAttributesHeaders headers;
    public UpdateServerEngineAttributesRequest withHeaders(UpdateServerEngineAttributesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateServerEngineAttributesRequest request;
    public UpdateServerEngineAttributesRequest withRequest(openapisdk.models.shared.UpdateServerEngineAttributesRequest request) {
        this.request = request;
        return this;
    }
}