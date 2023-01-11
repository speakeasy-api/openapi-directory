package openapisdk.models.operations;



public class DescribeGroupResponse {
    public String contentType;
    public DescribeGroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeGroupResponse describeGroupResponse;
    public DescribeGroupResponse withDescribeGroupResponse(openapisdk.models.shared.DescribeGroupResponse describeGroupResponse) {
        this.describeGroupResponse = describeGroupResponse;
        return this;
    }
    public Object entityNotFoundException;
    public DescribeGroupResponse withEntityNotFoundException(Object entityNotFoundException) {
        this.entityNotFoundException = entityNotFoundException;
        return this;
    }
    public Object invalidParameterException;
    public DescribeGroupResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object organizationNotFoundException;
    public DescribeGroupResponse withOrganizationNotFoundException(Object organizationNotFoundException) {
        this.organizationNotFoundException = organizationNotFoundException;
        return this;
    }
    public Object organizationStateException;
    public DescribeGroupResponse withOrganizationStateException(Object organizationStateException) {
        this.organizationStateException = organizationStateException;
        return this;
    }
    public Long statusCode;
    public DescribeGroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}