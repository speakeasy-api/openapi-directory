package openapisdk.models.operations;



public class DescribeContactResponse {
    public String contentType;
    public DescribeContactResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object dependencyException;
    public DescribeContactResponse withDependencyException(Object dependencyException) {
        this.dependencyException = dependencyException;
        return this;
    }
    public openapisdk.models.shared.DescribeContactResponse describeContactResponse;
    public DescribeContactResponse withDescribeContactResponse(openapisdk.models.shared.DescribeContactResponse describeContactResponse) {
        this.describeContactResponse = describeContactResponse;
        return this;
    }
    public Object invalidParameterException;
    public DescribeContactResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeContactResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeContactResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}