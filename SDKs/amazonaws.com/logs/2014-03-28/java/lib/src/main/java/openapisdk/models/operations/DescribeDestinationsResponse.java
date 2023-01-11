package openapisdk.models.operations;



public class DescribeDestinationsResponse {
    public String contentType;
    public DescribeDestinationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeDestinationsResponse describeDestinationsResponse;
    public DescribeDestinationsResponse withDescribeDestinationsResponse(openapisdk.models.shared.DescribeDestinationsResponse describeDestinationsResponse) {
        this.describeDestinationsResponse = describeDestinationsResponse;
        return this;
    }
    public Object invalidParameterException;
    public DescribeDestinationsResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object serviceUnavailableException;
    public DescribeDestinationsResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public DescribeDestinationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}