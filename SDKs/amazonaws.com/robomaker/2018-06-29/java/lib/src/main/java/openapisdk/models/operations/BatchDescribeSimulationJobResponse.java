package openapisdk.models.operations;



public class BatchDescribeSimulationJobResponse {
    public openapisdk.models.shared.BatchDescribeSimulationJobResponse batchDescribeSimulationJobResponse;
    public BatchDescribeSimulationJobResponse withBatchDescribeSimulationJobResponse(openapisdk.models.shared.BatchDescribeSimulationJobResponse batchDescribeSimulationJobResponse) {
        this.batchDescribeSimulationJobResponse = batchDescribeSimulationJobResponse;
        return this;
    }
    public String contentType;
    public BatchDescribeSimulationJobResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public BatchDescribeSimulationJobResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidParameterException;
    public BatchDescribeSimulationJobResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object resourceNotFoundException;
    public BatchDescribeSimulationJobResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public BatchDescribeSimulationJobResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public BatchDescribeSimulationJobResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}