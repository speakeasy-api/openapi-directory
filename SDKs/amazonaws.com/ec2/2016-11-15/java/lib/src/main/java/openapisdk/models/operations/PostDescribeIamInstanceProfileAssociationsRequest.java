package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeIamInstanceProfileAssociationsRequest {
    public PostDescribeIamInstanceProfileAssociationsQueryParams queryParams;
    public PostDescribeIamInstanceProfileAssociationsRequest withQueryParams(PostDescribeIamInstanceProfileAssociationsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeIamInstanceProfileAssociationsHeaders headers;
    public PostDescribeIamInstanceProfileAssociationsRequest withHeaders(PostDescribeIamInstanceProfileAssociationsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeIamInstanceProfileAssociationsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}