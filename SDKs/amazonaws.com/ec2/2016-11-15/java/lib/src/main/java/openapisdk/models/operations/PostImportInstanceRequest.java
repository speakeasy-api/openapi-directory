package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostImportInstanceRequest {
    public PostImportInstanceQueryParams queryParams;
    public PostImportInstanceRequest withQueryParams(PostImportInstanceQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostImportInstanceHeaders headers;
    public PostImportInstanceRequest withHeaders(PostImportInstanceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostImportInstanceRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}