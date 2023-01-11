package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDisableEbsEncryptionByDefaultRequest {
    public PostDisableEbsEncryptionByDefaultQueryParams queryParams;
    public PostDisableEbsEncryptionByDefaultRequest withQueryParams(PostDisableEbsEncryptionByDefaultQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDisableEbsEncryptionByDefaultHeaders headers;
    public PostDisableEbsEncryptionByDefaultRequest withHeaders(PostDisableEbsEncryptionByDefaultHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDisableEbsEncryptionByDefaultRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}