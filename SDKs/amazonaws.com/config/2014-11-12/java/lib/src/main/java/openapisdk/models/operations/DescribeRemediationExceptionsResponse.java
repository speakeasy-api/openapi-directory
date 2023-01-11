package openapisdk.models.operations;



public class DescribeRemediationExceptionsResponse {
    public String contentType;
    public DescribeRemediationExceptionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeRemediationExceptionsResponse describeRemediationExceptionsResponse;
    public DescribeRemediationExceptionsResponse withDescribeRemediationExceptionsResponse(openapisdk.models.shared.DescribeRemediationExceptionsResponse describeRemediationExceptionsResponse) {
        this.describeRemediationExceptionsResponse = describeRemediationExceptionsResponse;
        return this;
    }
    public Object invalidNextTokenException;
    public DescribeRemediationExceptionsResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public Object invalidParameterValueException;
    public DescribeRemediationExceptionsResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Long statusCode;
    public DescribeRemediationExceptionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}