package openapisdk.models.operations;



public class DescribeSimulationJobBatchResponse {
    public String contentType;
    public DescribeSimulationJobBatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeSimulationJobBatchResponse describeSimulationJobBatchResponse;
    public DescribeSimulationJobBatchResponse withDescribeSimulationJobBatchResponse(openapisdk.models.shared.DescribeSimulationJobBatchResponse describeSimulationJobBatchResponse) {
        this.describeSimulationJobBatchResponse = describeSimulationJobBatchResponse;
        return this;
    }
    public Object internalServerException;
    public DescribeSimulationJobBatchResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidParameterException;
    public DescribeSimulationJobBatchResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeSimulationJobBatchResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeSimulationJobBatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}