package openapisdk.models.operations;



public class DescribeResourceResponse {
    public String contentType;
    public DescribeResourceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeResourceResponse describeResourceResponse;
    public DescribeResourceResponse withDescribeResourceResponse(openapisdk.models.shared.DescribeResourceResponse describeResourceResponse) {
        this.describeResourceResponse = describeResourceResponse;
        return this;
    }
    public Object entityNotFoundException;
    public DescribeResourceResponse withEntityNotFoundException(Object entityNotFoundException) {
        this.entityNotFoundException = entityNotFoundException;
        return this;
    }
    public Object invalidParameterException;
    public DescribeResourceResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object organizationNotFoundException;
    public DescribeResourceResponse withOrganizationNotFoundException(Object organizationNotFoundException) {
        this.organizationNotFoundException = organizationNotFoundException;
        return this;
    }
    public Object organizationStateException;
    public DescribeResourceResponse withOrganizationStateException(Object organizationStateException) {
        this.organizationStateException = organizationStateException;
        return this;
    }
    public Long statusCode;
    public DescribeResourceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}