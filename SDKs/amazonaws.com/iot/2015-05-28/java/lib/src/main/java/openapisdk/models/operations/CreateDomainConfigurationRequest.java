package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateDomainConfigurationRequest {
    public CreateDomainConfigurationPathParams pathParams;
    public CreateDomainConfigurationRequest withPathParams(CreateDomainConfigurationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CreateDomainConfigurationHeaders headers;
    public CreateDomainConfigurationRequest withHeaders(CreateDomainConfigurationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateDomainConfigurationRequestBody request;
    public CreateDomainConfigurationRequest withRequest(CreateDomainConfigurationRequestBody request) {
        this.request = request;
        return this;
    }
}