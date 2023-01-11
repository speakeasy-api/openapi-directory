package openapisdk.models.operations;



public class CreateReplicationJobResponse {
    public String contentType;
    public CreateReplicationJobResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateReplicationJobResponse createReplicationJobResponse;
    public CreateReplicationJobResponse withCreateReplicationJobResponse(openapisdk.models.shared.CreateReplicationJobResponse createReplicationJobResponse) {
        this.createReplicationJobResponse = createReplicationJobResponse;
        return this;
    }
    public Object internalError;
    public CreateReplicationJobResponse withInternalError(Object internalError) {
        this.internalError = internalError;
        return this;
    }
    public Object invalidParameterException;
    public CreateReplicationJobResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object missingRequiredParameterException;
    public CreateReplicationJobResponse withMissingRequiredParameterException(Object missingRequiredParameterException) {
        this.missingRequiredParameterException = missingRequiredParameterException;
        return this;
    }
    public Object noConnectorsAvailableException;
    public CreateReplicationJobResponse withNoConnectorsAvailableException(Object noConnectorsAvailableException) {
        this.noConnectorsAvailableException = noConnectorsAvailableException;
        return this;
    }
    public Object operationNotPermittedException;
    public CreateReplicationJobResponse withOperationNotPermittedException(Object operationNotPermittedException) {
        this.operationNotPermittedException = operationNotPermittedException;
        return this;
    }
    public Object replicationJobAlreadyExistsException;
    public CreateReplicationJobResponse withReplicationJobAlreadyExistsException(Object replicationJobAlreadyExistsException) {
        this.replicationJobAlreadyExistsException = replicationJobAlreadyExistsException;
        return this;
    }
    public Object serverCannotBeReplicatedException;
    public CreateReplicationJobResponse withServerCannotBeReplicatedException(Object serverCannotBeReplicatedException) {
        this.serverCannotBeReplicatedException = serverCannotBeReplicatedException;
        return this;
    }
    public Long statusCode;
    public CreateReplicationJobResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object temporarilyUnavailableException;
    public CreateReplicationJobResponse withTemporarilyUnavailableException(Object temporarilyUnavailableException) {
        this.temporarilyUnavailableException = temporarilyUnavailableException;
        return this;
    }
    public Object unauthorizedOperationException;
    public CreateReplicationJobResponse withUnauthorizedOperationException(Object unauthorizedOperationException) {
        this.unauthorizedOperationException = unauthorizedOperationException;
        return this;
    }
}