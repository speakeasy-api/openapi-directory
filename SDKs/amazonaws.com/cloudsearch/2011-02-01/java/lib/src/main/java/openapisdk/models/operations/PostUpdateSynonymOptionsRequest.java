package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUpdateSynonymOptionsRequest {
    public PostUpdateSynonymOptionsQueryParams queryParams;
    public PostUpdateSynonymOptionsRequest withQueryParams(PostUpdateSynonymOptionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostUpdateSynonymOptionsHeaders headers;
    public PostUpdateSynonymOptionsRequest withHeaders(PostUpdateSynonymOptionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostUpdateSynonymOptionsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}