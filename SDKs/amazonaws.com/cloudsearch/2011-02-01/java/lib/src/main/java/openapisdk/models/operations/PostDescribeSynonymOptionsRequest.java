package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeSynonymOptionsRequest {
    public PostDescribeSynonymOptionsQueryParams queryParams;
    public PostDescribeSynonymOptionsRequest withQueryParams(PostDescribeSynonymOptionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeSynonymOptionsHeaders headers;
    public PostDescribeSynonymOptionsRequest withHeaders(PostDescribeSynonymOptionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeSynonymOptionsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}