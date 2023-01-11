package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGetEbsEncryptionByDefaultRequest {
    public PostGetEbsEncryptionByDefaultQueryParams queryParams;
    public PostGetEbsEncryptionByDefaultRequest withQueryParams(PostGetEbsEncryptionByDefaultQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostGetEbsEncryptionByDefaultHeaders headers;
    public PostGetEbsEncryptionByDefaultRequest withHeaders(PostGetEbsEncryptionByDefaultHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostGetEbsEncryptionByDefaultRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}