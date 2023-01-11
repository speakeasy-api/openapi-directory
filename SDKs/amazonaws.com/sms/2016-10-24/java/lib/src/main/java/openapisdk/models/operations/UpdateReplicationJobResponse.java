package openapisdk.models.operations;



public class UpdateReplicationJobResponse {
    public String contentType;
    public UpdateReplicationJobResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalError;
    public UpdateReplicationJobResponse withInternalError(Object internalError) {
        this.internalError = internalError;
        return this;
    }
    public Object invalidParameterException;
    public UpdateReplicationJobResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object missingRequiredParameterException;
    public UpdateReplicationJobResponse withMissingRequiredParameterException(Object missingRequiredParameterException) {
        this.missingRequiredParameterException = missingRequiredParameterException;
        return this;
    }
    public Object operationNotPermittedException;
    public UpdateReplicationJobResponse withOperationNotPermittedException(Object operationNotPermittedException) {
        this.operationNotPermittedException = operationNotPermittedException;
        return this;
    }
    public Object replicationJobNotFoundException;
    public UpdateReplicationJobResponse withReplicationJobNotFoundException(Object replicationJobNotFoundException) {
        this.replicationJobNotFoundException = replicationJobNotFoundException;
        return this;
    }
    public Object serverCannotBeReplicatedException;
    public UpdateReplicationJobResponse withServerCannotBeReplicatedException(Object serverCannotBeReplicatedException) {
        this.serverCannotBeReplicatedException = serverCannotBeReplicatedException;
        return this;
    }
    public Long statusCode;
    public UpdateReplicationJobResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object temporarilyUnavailableException;
    public UpdateReplicationJobResponse withTemporarilyUnavailableException(Object temporarilyUnavailableException) {
        this.temporarilyUnavailableException = temporarilyUnavailableException;
        return this;
    }
    public Object unauthorizedOperationException;
    public UpdateReplicationJobResponse withUnauthorizedOperationException(Object unauthorizedOperationException) {
        this.unauthorizedOperationException = unauthorizedOperationException;
        return this;
    }
    public java.util.Map<String, Object> updateReplicationJobResponse;
    public UpdateReplicationJobResponse withUpdateReplicationJobResponse(java.util.Map<String, Object> updateReplicationJobResponse) {
        this.updateReplicationJobResponse = updateReplicationJobResponse;
        return this;
    }
}