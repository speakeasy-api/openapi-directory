package openapisdk.models.operations;



public class DescribeJobLogItemsResponse {
    public String contentType;
    public DescribeJobLogItemsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeJobLogItemsResponse describeJobLogItemsResponse;
    public DescribeJobLogItemsResponse withDescribeJobLogItemsResponse(openapisdk.models.shared.DescribeJobLogItemsResponse describeJobLogItemsResponse) {
        this.describeJobLogItemsResponse = describeJobLogItemsResponse;
        return this;
    }
    public Long statusCode;
    public DescribeJobLogItemsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object uninitializedAccountException;
    public DescribeJobLogItemsResponse withUninitializedAccountException(Object uninitializedAccountException) {
        this.uninitializedAccountException = uninitializedAccountException;
        return this;
    }
    public Object validationException;
    public DescribeJobLogItemsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}