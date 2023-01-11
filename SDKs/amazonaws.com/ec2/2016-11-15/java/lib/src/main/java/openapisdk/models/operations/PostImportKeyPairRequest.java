package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostImportKeyPairRequest {
    public PostImportKeyPairQueryParams queryParams;
    public PostImportKeyPairRequest withQueryParams(PostImportKeyPairQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostImportKeyPairHeaders headers;
    public PostImportKeyPairRequest withHeaders(PostImportKeyPairHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostImportKeyPairRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}