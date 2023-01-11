package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutLifecycleConfigurationRequest {
    public PutLifecycleConfigurationPathParams pathParams;
    public PutLifecycleConfigurationRequest withPathParams(PutLifecycleConfigurationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PutLifecycleConfigurationHeaders headers;
    public PutLifecycleConfigurationRequest withHeaders(PutLifecycleConfigurationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PutLifecycleConfigurationRequestBody request;
    public PutLifecycleConfigurationRequest withRequest(PutLifecycleConfigurationRequestBody request) {
        this.request = request;
        return this;
    }
}