package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchConnectorRequest {
    public PatchConnectorPathParams pathParams;
    public PatchConnectorRequest withPathParams(PatchConnectorPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PatchConnectorRequestBody request;
    public PatchConnectorRequest withRequest(PatchConnectorRequestBody request) {
        this.request = request;
        return this;
    }
}