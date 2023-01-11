package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeInstanceCreditSpecificationsRequest {
    public PostDescribeInstanceCreditSpecificationsQueryParams queryParams;
    public PostDescribeInstanceCreditSpecificationsRequest withQueryParams(PostDescribeInstanceCreditSpecificationsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeInstanceCreditSpecificationsHeaders headers;
    public PostDescribeInstanceCreditSpecificationsRequest withHeaders(PostDescribeInstanceCreditSpecificationsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeInstanceCreditSpecificationsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}