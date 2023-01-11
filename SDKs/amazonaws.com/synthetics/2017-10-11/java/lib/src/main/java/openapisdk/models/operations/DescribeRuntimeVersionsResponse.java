package openapisdk.models.operations;



public class DescribeRuntimeVersionsResponse {
    public String contentType;
    public DescribeRuntimeVersionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeRuntimeVersionsResponse describeRuntimeVersionsResponse;
    public DescribeRuntimeVersionsResponse withDescribeRuntimeVersionsResponse(openapisdk.models.shared.DescribeRuntimeVersionsResponse describeRuntimeVersionsResponse) {
        this.describeRuntimeVersionsResponse = describeRuntimeVersionsResponse;
        return this;
    }
    public Object internalServerException;
    public DescribeRuntimeVersionsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Long statusCode;
    public DescribeRuntimeVersionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public DescribeRuntimeVersionsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}