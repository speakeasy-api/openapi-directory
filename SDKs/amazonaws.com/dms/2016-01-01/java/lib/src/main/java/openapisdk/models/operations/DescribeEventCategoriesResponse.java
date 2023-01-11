package openapisdk.models.operations;



public class DescribeEventCategoriesResponse {
    public String contentType;
    public DescribeEventCategoriesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeEventCategoriesResponse describeEventCategoriesResponse;
    public DescribeEventCategoriesResponse withDescribeEventCategoriesResponse(openapisdk.models.shared.DescribeEventCategoriesResponse describeEventCategoriesResponse) {
        this.describeEventCategoriesResponse = describeEventCategoriesResponse;
        return this;
    }
    public Long statusCode;
    public DescribeEventCategoriesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}