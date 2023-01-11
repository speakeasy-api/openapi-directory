package openapisdk.models.operations;



public class DescribeConnectorsResponse {
    public String contentType;
    public DescribeConnectorsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeConnectorsResponse describeConnectorsResponse;
    public DescribeConnectorsResponse withDescribeConnectorsResponse(openapisdk.models.shared.DescribeConnectorsResponse describeConnectorsResponse) {
        this.describeConnectorsResponse = describeConnectorsResponse;
        return this;
    }
    public Object internalServerException;
    public DescribeConnectorsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Long statusCode;
    public DescribeConnectorsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public DescribeConnectorsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}