package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeregisterJobDefinitionRequest {
    public DeregisterJobDefinitionHeaders headers;
    public DeregisterJobDefinitionRequest withHeaders(DeregisterJobDefinitionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public DeregisterJobDefinitionRequestBody request;
    public DeregisterJobDefinitionRequest withRequest(DeregisterJobDefinitionRequestBody request) {
        this.request = request;
        return this;
    }
}