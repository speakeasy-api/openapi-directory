package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateConfigurationSetEventDestinationRequest {
    public PostCreateConfigurationSetEventDestinationQueryParams queryParams;
    public PostCreateConfigurationSetEventDestinationRequest withQueryParams(PostCreateConfigurationSetEventDestinationQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostCreateConfigurationSetEventDestinationHeaders headers;
    public PostCreateConfigurationSetEventDestinationRequest withHeaders(PostCreateConfigurationSetEventDestinationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostCreateConfigurationSetEventDestinationRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}