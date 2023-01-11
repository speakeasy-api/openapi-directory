package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutConfigurationSetTrackingOptionsRequest {
    public PutConfigurationSetTrackingOptionsPathParams pathParams;
    public PutConfigurationSetTrackingOptionsRequest withPathParams(PutConfigurationSetTrackingOptionsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PutConfigurationSetTrackingOptionsHeaders headers;
    public PutConfigurationSetTrackingOptionsRequest withHeaders(PutConfigurationSetTrackingOptionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PutConfigurationSetTrackingOptionsRequestBody request;
    public PutConfigurationSetTrackingOptionsRequest withRequest(PutConfigurationSetTrackingOptionsRequestBody request) {
        this.request = request;
        return this;
    }
}