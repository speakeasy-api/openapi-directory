package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUpdateDomainEndpointOptionsRequest {
    public PostUpdateDomainEndpointOptionsQueryParams queryParams;
    public PostUpdateDomainEndpointOptionsRequest withQueryParams(PostUpdateDomainEndpointOptionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostUpdateDomainEndpointOptionsHeaders headers;
    public PostUpdateDomainEndpointOptionsRequest withHeaders(PostUpdateDomainEndpointOptionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostUpdateDomainEndpointOptionsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}