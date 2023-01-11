package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SetIdentityPoolConfigurationRequest {
    public SetIdentityPoolConfigurationPathParams pathParams;
    public SetIdentityPoolConfigurationRequest withPathParams(SetIdentityPoolConfigurationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SetIdentityPoolConfigurationHeaders headers;
    public SetIdentityPoolConfigurationRequest withHeaders(SetIdentityPoolConfigurationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public SetIdentityPoolConfigurationRequestBody request;
    public SetIdentityPoolConfigurationRequest withRequest(SetIdentityPoolConfigurationRequestBody request) {
        this.request = request;
        return this;
    }
}