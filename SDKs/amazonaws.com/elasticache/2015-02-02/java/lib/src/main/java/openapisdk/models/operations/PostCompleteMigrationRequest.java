package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCompleteMigrationRequest {
    public PostCompleteMigrationQueryParams queryParams;
    public PostCompleteMigrationRequest withQueryParams(PostCompleteMigrationQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostCompleteMigrationHeaders headers;
    public PostCompleteMigrationRequest withHeaders(PostCompleteMigrationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostCompleteMigrationRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}