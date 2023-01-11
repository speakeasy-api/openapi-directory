package openapisdk.models.operations;



public class DescribeAccountResponse {
    public Object accessDeniedException;
    public DescribeAccountResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public DescribeAccountResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeAccountResult describeAccountResult;
    public DescribeAccountResponse withDescribeAccountResult(openapisdk.models.shared.DescribeAccountResult describeAccountResult) {
        this.describeAccountResult = describeAccountResult;
        return this;
    }
    public Long statusCode;
    public DescribeAccountResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}