package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGetIdentityDkimAttributesRequest {
    public PostGetIdentityDkimAttributesQueryParams queryParams;
    public PostGetIdentityDkimAttributesRequest withQueryParams(PostGetIdentityDkimAttributesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostGetIdentityDkimAttributesHeaders headers;
    public PostGetIdentityDkimAttributesRequest withHeaders(PostGetIdentityDkimAttributesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostGetIdentityDkimAttributesRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}