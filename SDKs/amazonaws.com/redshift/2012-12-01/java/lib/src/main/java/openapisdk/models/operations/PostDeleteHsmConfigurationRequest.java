package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteHsmConfigurationRequest {
    public PostDeleteHsmConfigurationQueryParams queryParams;
    public PostDeleteHsmConfigurationRequest withQueryParams(PostDeleteHsmConfigurationQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDeleteHsmConfigurationHeaders headers;
    public PostDeleteHsmConfigurationRequest withHeaders(PostDeleteHsmConfigurationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeleteHsmConfigurationRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}