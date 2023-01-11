package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateConfigurationSetTrackingOptionsRequest {
    public PostCreateConfigurationSetTrackingOptionsQueryParams queryParams;
    public PostCreateConfigurationSetTrackingOptionsRequest withQueryParams(PostCreateConfigurationSetTrackingOptionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostCreateConfigurationSetTrackingOptionsHeaders headers;
    public PostCreateConfigurationSetTrackingOptionsRequest withHeaders(PostCreateConfigurationSetTrackingOptionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostCreateConfigurationSetTrackingOptionsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}