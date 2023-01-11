package openapisdk.models.operations;



public class DeleteReplicationJobResponse {
    public String contentType;
    public DeleteReplicationJobResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteReplicationJobResponse;
    public DeleteReplicationJobResponse withDeleteReplicationJobResponse(java.util.Map<String, Object> deleteReplicationJobResponse) {
        this.deleteReplicationJobResponse = deleteReplicationJobResponse;
        return this;
    }
    public Object invalidParameterException;
    public DeleteReplicationJobResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object missingRequiredParameterException;
    public DeleteReplicationJobResponse withMissingRequiredParameterException(Object missingRequiredParameterException) {
        this.missingRequiredParameterException = missingRequiredParameterException;
        return this;
    }
    public Object operationNotPermittedException;
    public DeleteReplicationJobResponse withOperationNotPermittedException(Object operationNotPermittedException) {
        this.operationNotPermittedException = operationNotPermittedException;
        return this;
    }
    public Object replicationJobNotFoundException;
    public DeleteReplicationJobResponse withReplicationJobNotFoundException(Object replicationJobNotFoundException) {
        this.replicationJobNotFoundException = replicationJobNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteReplicationJobResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthorizedOperationException;
    public DeleteReplicationJobResponse withUnauthorizedOperationException(Object unauthorizedOperationException) {
        this.unauthorizedOperationException = unauthorizedOperationException;
        return this;
    }
}