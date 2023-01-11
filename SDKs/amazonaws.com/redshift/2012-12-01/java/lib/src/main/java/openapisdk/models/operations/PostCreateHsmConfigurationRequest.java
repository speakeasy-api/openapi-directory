package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateHsmConfigurationRequest {
    public PostCreateHsmConfigurationQueryParams queryParams;
    public PostCreateHsmConfigurationRequest withQueryParams(PostCreateHsmConfigurationQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostCreateHsmConfigurationHeaders headers;
    public PostCreateHsmConfigurationRequest withHeaders(PostCreateHsmConfigurationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostCreateHsmConfigurationRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}