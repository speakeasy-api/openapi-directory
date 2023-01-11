package openapisdk.models.operations;



public class DescribeOrganizationResponse {
    public String contentType;
    public DescribeOrganizationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeOrganizationResponse describeOrganizationResponse;
    public DescribeOrganizationResponse withDescribeOrganizationResponse(openapisdk.models.shared.DescribeOrganizationResponse describeOrganizationResponse) {
        this.describeOrganizationResponse = describeOrganizationResponse;
        return this;
    }
    public Object invalidParameterException;
    public DescribeOrganizationResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object organizationNotFoundException;
    public DescribeOrganizationResponse withOrganizationNotFoundException(Object organizationNotFoundException) {
        this.organizationNotFoundException = organizationNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeOrganizationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}