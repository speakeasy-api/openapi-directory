package openapisdk.models.operations;



public class DescribeUserResponse {
    public String contentType;
    public DescribeUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeUserResponse describeUserResponse;
    public DescribeUserResponse withDescribeUserResponse(openapisdk.models.shared.DescribeUserResponse describeUserResponse) {
        this.describeUserResponse = describeUserResponse;
        return this;
    }
    public Object entityNotFoundException;
    public DescribeUserResponse withEntityNotFoundException(Object entityNotFoundException) {
        this.entityNotFoundException = entityNotFoundException;
        return this;
    }
    public Object invalidParameterException;
    public DescribeUserResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object organizationNotFoundException;
    public DescribeUserResponse withOrganizationNotFoundException(Object organizationNotFoundException) {
        this.organizationNotFoundException = organizationNotFoundException;
        return this;
    }
    public Object organizationStateException;
    public DescribeUserResponse withOrganizationStateException(Object organizationStateException) {
        this.organizationStateException = organizationStateException;
        return this;
    }
    public Long statusCode;
    public DescribeUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}