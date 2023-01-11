package openapisdk.models.operations;



public class DescribeConnectorProfilesResponse {
    public String contentType;
    public DescribeConnectorProfilesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeConnectorProfilesResponse describeConnectorProfilesResponse;
    public DescribeConnectorProfilesResponse withDescribeConnectorProfilesResponse(openapisdk.models.shared.DescribeConnectorProfilesResponse describeConnectorProfilesResponse) {
        this.describeConnectorProfilesResponse = describeConnectorProfilesResponse;
        return this;
    }
    public Object internalServerException;
    public DescribeConnectorProfilesResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Long statusCode;
    public DescribeConnectorProfilesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public DescribeConnectorProfilesResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}