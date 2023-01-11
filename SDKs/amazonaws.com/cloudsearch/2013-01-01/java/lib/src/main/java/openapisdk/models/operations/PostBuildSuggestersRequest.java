package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostBuildSuggestersRequest {
    public PostBuildSuggestersQueryParams queryParams;
    public PostBuildSuggestersRequest withQueryParams(PostBuildSuggestersQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostBuildSuggestersHeaders headers;
    public PostBuildSuggestersRequest withHeaders(PostBuildSuggestersHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostBuildSuggestersRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}