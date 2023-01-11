package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUpdateConfigurationSetEventDestinationRequest {
    public PostUpdateConfigurationSetEventDestinationQueryParams queryParams;
    public PostUpdateConfigurationSetEventDestinationRequest withQueryParams(PostUpdateConfigurationSetEventDestinationQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostUpdateConfigurationSetEventDestinationHeaders headers;
    public PostUpdateConfigurationSetEventDestinationRequest withHeaders(PostUpdateConfigurationSetEventDestinationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostUpdateConfigurationSetEventDestinationRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}