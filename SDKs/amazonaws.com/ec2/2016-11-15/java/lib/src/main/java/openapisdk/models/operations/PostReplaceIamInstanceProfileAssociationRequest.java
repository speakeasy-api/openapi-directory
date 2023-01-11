package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostReplaceIamInstanceProfileAssociationRequest {
    public PostReplaceIamInstanceProfileAssociationQueryParams queryParams;
    public PostReplaceIamInstanceProfileAssociationRequest withQueryParams(PostReplaceIamInstanceProfileAssociationQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostReplaceIamInstanceProfileAssociationHeaders headers;
    public PostReplaceIamInstanceProfileAssociationRequest withHeaders(PostReplaceIamInstanceProfileAssociationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostReplaceIamInstanceProfileAssociationRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}