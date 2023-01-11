package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGetClusterCredentialsRequest {
    public PostGetClusterCredentialsQueryParams queryParams;
    public PostGetClusterCredentialsRequest withQueryParams(PostGetClusterCredentialsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostGetClusterCredentialsHeaders headers;
    public PostGetClusterCredentialsRequest withHeaders(PostGetClusterCredentialsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostGetClusterCredentialsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}