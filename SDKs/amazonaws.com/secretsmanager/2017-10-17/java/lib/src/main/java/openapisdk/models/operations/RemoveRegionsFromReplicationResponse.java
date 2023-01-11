package openapisdk.models.operations;



public class RemoveRegionsFromReplicationResponse {
    public String contentType;
    public RemoveRegionsFromReplicationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceError;
    public RemoveRegionsFromReplicationResponse withInternalServiceError(Object internalServiceError) {
        this.internalServiceError = internalServiceError;
        return this;
    }
    public Object invalidParameterException;
    public RemoveRegionsFromReplicationResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object invalidRequestException;
    public RemoveRegionsFromReplicationResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.RemoveRegionsFromReplicationResponse removeRegionsFromReplicationResponse;
    public RemoveRegionsFromReplicationResponse withRemoveRegionsFromReplicationResponse(openapisdk.models.shared.RemoveRegionsFromReplicationResponse removeRegionsFromReplicationResponse) {
        this.removeRegionsFromReplicationResponse = removeRegionsFromReplicationResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public RemoveRegionsFromReplicationResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public RemoveRegionsFromReplicationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}