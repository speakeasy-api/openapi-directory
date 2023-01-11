package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostEnableEbsEncryptionByDefaultRequest {
    public PostEnableEbsEncryptionByDefaultQueryParams queryParams;
    public PostEnableEbsEncryptionByDefaultRequest withQueryParams(PostEnableEbsEncryptionByDefaultQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostEnableEbsEncryptionByDefaultHeaders headers;
    public PostEnableEbsEncryptionByDefaultRequest withHeaders(PostEnableEbsEncryptionByDefaultHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostEnableEbsEncryptionByDefaultRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}