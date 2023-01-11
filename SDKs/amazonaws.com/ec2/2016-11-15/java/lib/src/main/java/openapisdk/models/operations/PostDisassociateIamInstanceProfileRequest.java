package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDisassociateIamInstanceProfileRequest {
    public PostDisassociateIamInstanceProfileQueryParams queryParams;
    public PostDisassociateIamInstanceProfileRequest withQueryParams(PostDisassociateIamInstanceProfileQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDisassociateIamInstanceProfileHeaders headers;
    public PostDisassociateIamInstanceProfileRequest withHeaders(PostDisassociateIamInstanceProfileHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDisassociateIamInstanceProfileRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}