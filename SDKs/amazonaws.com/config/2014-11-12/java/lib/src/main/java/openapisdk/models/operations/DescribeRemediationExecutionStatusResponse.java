package openapisdk.models.operations;



public class DescribeRemediationExecutionStatusResponse {
    public String contentType;
    public DescribeRemediationExecutionStatusResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeRemediationExecutionStatusResponse describeRemediationExecutionStatusResponse;
    public DescribeRemediationExecutionStatusResponse withDescribeRemediationExecutionStatusResponse(openapisdk.models.shared.DescribeRemediationExecutionStatusResponse describeRemediationExecutionStatusResponse) {
        this.describeRemediationExecutionStatusResponse = describeRemediationExecutionStatusResponse;
        return this;
    }
    public Object invalidNextTokenException;
    public DescribeRemediationExecutionStatusResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public Object invalidParameterValueException;
    public DescribeRemediationExecutionStatusResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Object noSuchRemediationConfigurationException;
    public DescribeRemediationExecutionStatusResponse withNoSuchRemediationConfigurationException(Object noSuchRemediationConfigurationException) {
        this.noSuchRemediationConfigurationException = noSuchRemediationConfigurationException;
        return this;
    }
    public Long statusCode;
    public DescribeRemediationExecutionStatusResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}