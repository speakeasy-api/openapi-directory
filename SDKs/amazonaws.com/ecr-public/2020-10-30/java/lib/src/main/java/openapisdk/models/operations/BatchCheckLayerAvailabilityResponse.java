package openapisdk.models.operations;



public class BatchCheckLayerAvailabilityResponse {
    public openapisdk.models.shared.BatchCheckLayerAvailabilityResponse batchCheckLayerAvailabilityResponse;
    public BatchCheckLayerAvailabilityResponse withBatchCheckLayerAvailabilityResponse(openapisdk.models.shared.BatchCheckLayerAvailabilityResponse batchCheckLayerAvailabilityResponse) {
        this.batchCheckLayerAvailabilityResponse = batchCheckLayerAvailabilityResponse;
        return this;
    }
    public String contentType;
    public BatchCheckLayerAvailabilityResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParameterException;
    public BatchCheckLayerAvailabilityResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object registryNotFoundException;
    public BatchCheckLayerAvailabilityResponse withRegistryNotFoundException(Object registryNotFoundException) {
        this.registryNotFoundException = registryNotFoundException;
        return this;
    }
    public Object repositoryNotFoundException;
    public BatchCheckLayerAvailabilityResponse withRepositoryNotFoundException(Object repositoryNotFoundException) {
        this.repositoryNotFoundException = repositoryNotFoundException;
        return this;
    }
    public Object serverException;
    public BatchCheckLayerAvailabilityResponse withServerException(Object serverException) {
        this.serverException = serverException;
        return this;
    }
    public Long statusCode;
    public BatchCheckLayerAvailabilityResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}