package openapisdk.models.operations;



public class DescribeServicesResponse {
    public String contentType;
    public DescribeServicesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeServicesResponse describeServicesResponse;
    public DescribeServicesResponse withDescribeServicesResponse(openapisdk.models.shared.DescribeServicesResponse describeServicesResponse) {
        this.describeServicesResponse = describeServicesResponse;
        return this;
    }
    public Object internalServerError;
    public DescribeServicesResponse withInternalServerError(Object internalServerError) {
        this.internalServerError = internalServerError;
        return this;
    }
    public Long statusCode;
    public DescribeServicesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}