package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGetServiceLastAccessedDetailsWithEntitiesRequest {
    public PostGetServiceLastAccessedDetailsWithEntitiesQueryParams queryParams;
    public PostGetServiceLastAccessedDetailsWithEntitiesRequest withQueryParams(PostGetServiceLastAccessedDetailsWithEntitiesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostGetServiceLastAccessedDetailsWithEntitiesHeaders headers;
    public PostGetServiceLastAccessedDetailsWithEntitiesRequest withHeaders(PostGetServiceLastAccessedDetailsWithEntitiesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostGetServiceLastAccessedDetailsWithEntitiesRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}