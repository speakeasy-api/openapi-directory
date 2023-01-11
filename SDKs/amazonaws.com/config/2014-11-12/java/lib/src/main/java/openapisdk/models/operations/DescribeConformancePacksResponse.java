package openapisdk.models.operations;



public class DescribeConformancePacksResponse {
    public String contentType;
    public DescribeConformancePacksResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeConformancePacksResponse describeConformancePacksResponse;
    public DescribeConformancePacksResponse withDescribeConformancePacksResponse(openapisdk.models.shared.DescribeConformancePacksResponse describeConformancePacksResponse) {
        this.describeConformancePacksResponse = describeConformancePacksResponse;
        return this;
    }
    public Object invalidLimitException;
    public DescribeConformancePacksResponse withInvalidLimitException(Object invalidLimitException) {
        this.invalidLimitException = invalidLimitException;
        return this;
    }
    public Object invalidNextTokenException;
    public DescribeConformancePacksResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public Object invalidParameterValueException;
    public DescribeConformancePacksResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Object noSuchConformancePackException;
    public DescribeConformancePacksResponse withNoSuchConformancePackException(Object noSuchConformancePackException) {
        this.noSuchConformancePackException = noSuchConformancePackException;
        return this;
    }
    public Long statusCode;
    public DescribeConformancePacksResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}