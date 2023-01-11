package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutConfigurationSetSendingOptionsRequest {
    public PutConfigurationSetSendingOptionsPathParams pathParams;
    public PutConfigurationSetSendingOptionsRequest withPathParams(PutConfigurationSetSendingOptionsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PutConfigurationSetSendingOptionsHeaders headers;
    public PutConfigurationSetSendingOptionsRequest withHeaders(PutConfigurationSetSendingOptionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PutConfigurationSetSendingOptionsRequestBody request;
    public PutConfigurationSetSendingOptionsRequest withRequest(PutConfigurationSetSendingOptionsRequestBody request) {
        this.request = request;
        return this;
    }
}