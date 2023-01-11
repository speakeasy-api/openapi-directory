package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostResetEbsDefaultKmsKeyIdRequest {
    public PostResetEbsDefaultKmsKeyIdQueryParams queryParams;
    public PostResetEbsDefaultKmsKeyIdRequest withQueryParams(PostResetEbsDefaultKmsKeyIdQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostResetEbsDefaultKmsKeyIdHeaders headers;
    public PostResetEbsDefaultKmsKeyIdRequest withHeaders(PostResetEbsDefaultKmsKeyIdHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostResetEbsDefaultKmsKeyIdRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}