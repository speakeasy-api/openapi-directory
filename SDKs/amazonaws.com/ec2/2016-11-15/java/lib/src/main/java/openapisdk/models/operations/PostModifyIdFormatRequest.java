package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyIdFormatRequest {
    public PostModifyIdFormatQueryParams queryParams;
    public PostModifyIdFormatRequest withQueryParams(PostModifyIdFormatQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostModifyIdFormatHeaders headers;
    public PostModifyIdFormatRequest withHeaders(PostModifyIdFormatHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostModifyIdFormatRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}