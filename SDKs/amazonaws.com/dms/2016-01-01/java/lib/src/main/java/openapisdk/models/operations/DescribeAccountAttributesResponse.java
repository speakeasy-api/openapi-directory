package openapisdk.models.operations;



public class DescribeAccountAttributesResponse {
    public String contentType;
    public DescribeAccountAttributesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeAccountAttributesResponse describeAccountAttributesResponse;
    public DescribeAccountAttributesResponse withDescribeAccountAttributesResponse(openapisdk.models.shared.DescribeAccountAttributesResponse describeAccountAttributesResponse) {
        this.describeAccountAttributesResponse = describeAccountAttributesResponse;
        return this;
    }
    public Long statusCode;
    public DescribeAccountAttributesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}