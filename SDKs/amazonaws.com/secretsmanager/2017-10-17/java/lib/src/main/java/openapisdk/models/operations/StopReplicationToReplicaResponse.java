package openapisdk.models.operations;



public class StopReplicationToReplicaResponse {
    public String contentType;
    public StopReplicationToReplicaResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceError;
    public StopReplicationToReplicaResponse withInternalServiceError(Object internalServiceError) {
        this.internalServiceError = internalServiceError;
        return this;
    }
    public Object invalidParameterException;
    public StopReplicationToReplicaResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object invalidRequestException;
    public StopReplicationToReplicaResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public StopReplicationToReplicaResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public StopReplicationToReplicaResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.StopReplicationToReplicaResponse stopReplicationToReplicaResponse;
    public StopReplicationToReplicaResponse withStopReplicationToReplicaResponse(openapisdk.models.shared.StopReplicationToReplicaResponse stopReplicationToReplicaResponse) {
        this.stopReplicationToReplicaResponse = stopReplicationToReplicaResponse;
        return this;
    }
}