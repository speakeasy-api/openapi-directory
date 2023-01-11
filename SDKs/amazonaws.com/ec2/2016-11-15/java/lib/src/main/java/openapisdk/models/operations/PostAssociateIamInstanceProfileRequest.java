package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAssociateIamInstanceProfileRequest {
    public PostAssociateIamInstanceProfileQueryParams queryParams;
    public PostAssociateIamInstanceProfileRequest withQueryParams(PostAssociateIamInstanceProfileQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostAssociateIamInstanceProfileHeaders headers;
    public PostAssociateIamInstanceProfileRequest withHeaders(PostAssociateIamInstanceProfileHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostAssociateIamInstanceProfileRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}