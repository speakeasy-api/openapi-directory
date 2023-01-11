package openapisdk.models.operations;



public class DescribeConformancePackStatusResponse {
    public String contentType;
    public DescribeConformancePackStatusResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeConformancePackStatusResponse describeConformancePackStatusResponse;
    public DescribeConformancePackStatusResponse withDescribeConformancePackStatusResponse(openapisdk.models.shared.DescribeConformancePackStatusResponse describeConformancePackStatusResponse) {
        this.describeConformancePackStatusResponse = describeConformancePackStatusResponse;
        return this;
    }
    public Object invalidLimitException;
    public DescribeConformancePackStatusResponse withInvalidLimitException(Object invalidLimitException) {
        this.invalidLimitException = invalidLimitException;
        return this;
    }
    public Object invalidNextTokenException;
    public DescribeConformancePackStatusResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public Object invalidParameterValueException;
    public DescribeConformancePackStatusResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Long statusCode;
    public DescribeConformancePackStatusResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}