package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeDomainEndpointOptionsRequest {
    public PostDescribeDomainEndpointOptionsQueryParams queryParams;
    public PostDescribeDomainEndpointOptionsRequest withQueryParams(PostDescribeDomainEndpointOptionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeDomainEndpointOptionsHeaders headers;
    public PostDescribeDomainEndpointOptionsRequest withHeaders(PostDescribeDomainEndpointOptionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeDomainEndpointOptionsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}