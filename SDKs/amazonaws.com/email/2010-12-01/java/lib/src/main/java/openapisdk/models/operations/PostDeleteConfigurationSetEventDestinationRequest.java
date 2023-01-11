package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteConfigurationSetEventDestinationRequest {
    public PostDeleteConfigurationSetEventDestinationQueryParams queryParams;
    public PostDeleteConfigurationSetEventDestinationRequest withQueryParams(PostDeleteConfigurationSetEventDestinationQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDeleteConfigurationSetEventDestinationHeaders headers;
    public PostDeleteConfigurationSetEventDestinationRequest withHeaders(PostDeleteConfigurationSetEventDestinationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeleteConfigurationSetEventDestinationRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}