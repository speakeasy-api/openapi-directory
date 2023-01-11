package openapisdk.models.operations;



public class DescribeUserStackAssociationsResponse {
    public String contentType;
    public DescribeUserStackAssociationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeUserStackAssociationsResult describeUserStackAssociationsResult;
    public DescribeUserStackAssociationsResponse withDescribeUserStackAssociationsResult(openapisdk.models.shared.DescribeUserStackAssociationsResult describeUserStackAssociationsResult) {
        this.describeUserStackAssociationsResult = describeUserStackAssociationsResult;
        return this;
    }
    public Object invalidParameterCombinationException;
    public DescribeUserStackAssociationsResponse withInvalidParameterCombinationException(Object invalidParameterCombinationException) {
        this.invalidParameterCombinationException = invalidParameterCombinationException;
        return this;
    }
    public Object operationNotPermittedException;
    public DescribeUserStackAssociationsResponse withOperationNotPermittedException(Object operationNotPermittedException) {
        this.operationNotPermittedException = operationNotPermittedException;
        return this;
    }
    public Long statusCode;
    public DescribeUserStackAssociationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}