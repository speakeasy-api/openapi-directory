package openapisdk.models.operations;



public class DescribeQueryDefinitionsResponse {
    public String contentType;
    public DescribeQueryDefinitionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeQueryDefinitionsResponse describeQueryDefinitionsResponse;
    public DescribeQueryDefinitionsResponse withDescribeQueryDefinitionsResponse(openapisdk.models.shared.DescribeQueryDefinitionsResponse describeQueryDefinitionsResponse) {
        this.describeQueryDefinitionsResponse = describeQueryDefinitionsResponse;
        return this;
    }
    public Object invalidParameterException;
    public DescribeQueryDefinitionsResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object serviceUnavailableException;
    public DescribeQueryDefinitionsResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public DescribeQueryDefinitionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}