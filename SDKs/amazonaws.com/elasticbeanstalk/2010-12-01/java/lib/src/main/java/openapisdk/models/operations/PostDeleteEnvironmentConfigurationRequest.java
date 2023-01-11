package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteEnvironmentConfigurationRequest {
    public PostDeleteEnvironmentConfigurationQueryParams queryParams;
    public PostDeleteEnvironmentConfigurationRequest withQueryParams(PostDeleteEnvironmentConfigurationQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDeleteEnvironmentConfigurationHeaders headers;
    public PostDeleteEnvironmentConfigurationRequest withHeaders(PostDeleteEnvironmentConfigurationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeleteEnvironmentConfigurationRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}