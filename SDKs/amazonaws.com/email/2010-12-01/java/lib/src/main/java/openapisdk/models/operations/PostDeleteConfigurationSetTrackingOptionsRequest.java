package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteConfigurationSetTrackingOptionsRequest {
    public PostDeleteConfigurationSetTrackingOptionsQueryParams queryParams;
    public PostDeleteConfigurationSetTrackingOptionsRequest withQueryParams(PostDeleteConfigurationSetTrackingOptionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDeleteConfigurationSetTrackingOptionsHeaders headers;
    public PostDeleteConfigurationSetTrackingOptionsRequest withHeaders(PostDeleteConfigurationSetTrackingOptionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeleteConfigurationSetTrackingOptionsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}