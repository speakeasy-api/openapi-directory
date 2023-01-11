package openapisdk.models.operations;



public class DescribeSimulationApplicationResponse {
    public String contentType;
    public DescribeSimulationApplicationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeSimulationApplicationResponse describeSimulationApplicationResponse;
    public DescribeSimulationApplicationResponse withDescribeSimulationApplicationResponse(openapisdk.models.shared.DescribeSimulationApplicationResponse describeSimulationApplicationResponse) {
        this.describeSimulationApplicationResponse = describeSimulationApplicationResponse;
        return this;
    }
    public Object internalServerException;
    public DescribeSimulationApplicationResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidParameterException;
    public DescribeSimulationApplicationResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeSimulationApplicationResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeSimulationApplicationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DescribeSimulationApplicationResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}