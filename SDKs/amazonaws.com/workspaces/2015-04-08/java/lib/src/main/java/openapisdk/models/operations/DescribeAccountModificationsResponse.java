package openapisdk.models.operations;



public class DescribeAccountModificationsResponse {
    public Object accessDeniedException;
    public DescribeAccountModificationsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public DescribeAccountModificationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeAccountModificationsResult describeAccountModificationsResult;
    public DescribeAccountModificationsResponse withDescribeAccountModificationsResult(openapisdk.models.shared.DescribeAccountModificationsResult describeAccountModificationsResult) {
        this.describeAccountModificationsResult = describeAccountModificationsResult;
        return this;
    }
    public Long statusCode;
    public DescribeAccountModificationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}