package openapisdk.models.operations;



public class StartOnDemandReplicationRunResponse {
    public String contentType;
    public StartOnDemandReplicationRunResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object dryRunOperationException;
    public StartOnDemandReplicationRunResponse withDryRunOperationException(Object dryRunOperationException) {
        this.dryRunOperationException = dryRunOperationException;
        return this;
    }
    public Object invalidParameterException;
    public StartOnDemandReplicationRunResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object missingRequiredParameterException;
    public StartOnDemandReplicationRunResponse withMissingRequiredParameterException(Object missingRequiredParameterException) {
        this.missingRequiredParameterException = missingRequiredParameterException;
        return this;
    }
    public Object operationNotPermittedException;
    public StartOnDemandReplicationRunResponse withOperationNotPermittedException(Object operationNotPermittedException) {
        this.operationNotPermittedException = operationNotPermittedException;
        return this;
    }
    public Object replicationRunLimitExceededException;
    public StartOnDemandReplicationRunResponse withReplicationRunLimitExceededException(Object replicationRunLimitExceededException) {
        this.replicationRunLimitExceededException = replicationRunLimitExceededException;
        return this;
    }
    public openapisdk.models.shared.StartOnDemandReplicationRunResponse startOnDemandReplicationRunResponse;
    public StartOnDemandReplicationRunResponse withStartOnDemandReplicationRunResponse(openapisdk.models.shared.StartOnDemandReplicationRunResponse startOnDemandReplicationRunResponse) {
        this.startOnDemandReplicationRunResponse = startOnDemandReplicationRunResponse;
        return this;
    }
    public Long statusCode;
    public StartOnDemandReplicationRunResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthorizedOperationException;
    public StartOnDemandReplicationRunResponse withUnauthorizedOperationException(Object unauthorizedOperationException) {
        this.unauthorizedOperationException = unauthorizedOperationException;
        return this;
    }
}