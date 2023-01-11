package openapisdk.models.operations;



public class DescribeObjectResponse {
    public Object containerNotFoundException;
    public DescribeObjectResponse withContainerNotFoundException(Object containerNotFoundException) {
        this.containerNotFoundException = containerNotFoundException;
        return this;
    }
    public String contentType;
    public DescribeObjectResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> describeObjectResponse;
    public DescribeObjectResponse withDescribeObjectResponse(java.util.Map<String, Object> describeObjectResponse) {
        this.describeObjectResponse = describeObjectResponse;
        return this;
    }
    public Object internalServerError;
    public DescribeObjectResponse withInternalServerError(Object internalServerError) {
        this.internalServerError = internalServerError;
        return this;
    }
    public Object objectNotFoundException;
    public DescribeObjectResponse withObjectNotFoundException(Object objectNotFoundException) {
        this.objectNotFoundException = objectNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeObjectResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}