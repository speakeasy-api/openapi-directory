package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUpdateConfigurationSetTrackingOptionsRequest {
    public PostUpdateConfigurationSetTrackingOptionsQueryParams queryParams;
    public PostUpdateConfigurationSetTrackingOptionsRequest withQueryParams(PostUpdateConfigurationSetTrackingOptionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostUpdateConfigurationSetTrackingOptionsHeaders headers;
    public PostUpdateConfigurationSetTrackingOptionsRequest withHeaders(PostUpdateConfigurationSetTrackingOptionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostUpdateConfigurationSetTrackingOptionsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}