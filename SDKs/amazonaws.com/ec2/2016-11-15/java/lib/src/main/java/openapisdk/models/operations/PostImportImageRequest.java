package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostImportImageRequest {
    public PostImportImageQueryParams queryParams;
    public PostImportImageRequest withQueryParams(PostImportImageQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostImportImageHeaders headers;
    public PostImportImageRequest withHeaders(PostImportImageHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostImportImageRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}