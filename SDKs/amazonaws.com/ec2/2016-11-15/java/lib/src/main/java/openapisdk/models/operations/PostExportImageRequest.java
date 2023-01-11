package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostExportImageRequest {
    public PostExportImageQueryParams queryParams;
    public PostExportImageRequest withQueryParams(PostExportImageQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostExportImageHeaders headers;
    public PostExportImageRequest withHeaders(PostExportImageHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostExportImageRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}