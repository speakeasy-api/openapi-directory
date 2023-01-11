package openapisdk.models.operations;



public class DescribeSimulationJobResponse {
    public String contentType;
    public DescribeSimulationJobResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeSimulationJobResponse describeSimulationJobResponse;
    public DescribeSimulationJobResponse withDescribeSimulationJobResponse(openapisdk.models.shared.DescribeSimulationJobResponse describeSimulationJobResponse) {
        this.describeSimulationJobResponse = describeSimulationJobResponse;
        return this;
    }
    public Object internalServerException;
    public DescribeSimulationJobResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidParameterException;
    public DescribeSimulationJobResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeSimulationJobResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeSimulationJobResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DescribeSimulationJobResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}