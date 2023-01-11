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
    public Object expiredNextTokenException;
    public DescribeServicesResponse withExpiredNextTokenException(Object expiredNextTokenException) {
        this.expiredNextTokenException = expiredNextTokenException;
        return this;
    }
    public Object internalErrorException;
    public DescribeServicesResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object invalidNextTokenException;
    public DescribeServicesResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public Object invalidParameterException;
    public DescribeServicesResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object notFoundException;
    public DescribeServicesResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeServicesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}