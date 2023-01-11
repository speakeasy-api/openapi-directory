package openapisdk.models.operations;



public class DescribeAttackResponse {
    public Object accessDeniedException;
    public DescribeAttackResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public DescribeAttackResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeAttackResponse describeAttackResponse;
    public DescribeAttackResponse withDescribeAttackResponse(openapisdk.models.shared.DescribeAttackResponse describeAttackResponse) {
        this.describeAttackResponse = describeAttackResponse;
        return this;
    }
    public Object internalErrorException;
    public DescribeAttackResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Long statusCode;
    public DescribeAttackResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}