package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGetEbsDefaultKmsKeyIdRequest {
    public PostGetEbsDefaultKmsKeyIdQueryParams queryParams;
    public PostGetEbsDefaultKmsKeyIdRequest withQueryParams(PostGetEbsDefaultKmsKeyIdQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostGetEbsDefaultKmsKeyIdHeaders headers;
    public PostGetEbsDefaultKmsKeyIdRequest withHeaders(PostGetEbsDefaultKmsKeyIdHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostGetEbsDefaultKmsKeyIdRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}