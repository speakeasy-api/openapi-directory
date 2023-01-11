package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyEbsDefaultKmsKeyIdRequest {
    public PostModifyEbsDefaultKmsKeyIdQueryParams queryParams;
    public PostModifyEbsDefaultKmsKeyIdRequest withQueryParams(PostModifyEbsDefaultKmsKeyIdQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostModifyEbsDefaultKmsKeyIdHeaders headers;
    public PostModifyEbsDefaultKmsKeyIdRequest withHeaders(PostModifyEbsDefaultKmsKeyIdHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostModifyEbsDefaultKmsKeyIdRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}