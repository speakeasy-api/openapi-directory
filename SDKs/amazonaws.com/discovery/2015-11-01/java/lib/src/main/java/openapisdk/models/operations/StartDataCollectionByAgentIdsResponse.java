package openapisdk.models.operations;



public class StartDataCollectionByAgentIdsResponse {
    public Object authorizationErrorException;
    public StartDataCollectionByAgentIdsResponse withAuthorizationErrorException(Object authorizationErrorException) {
        this.authorizationErrorException = authorizationErrorException;
        return this;
    }
    public String contentType;
    public StartDataCollectionByAgentIdsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object homeRegionNotSetException;
    public StartDataCollectionByAgentIdsResponse withHomeRegionNotSetException(Object homeRegionNotSetException) {
        this.homeRegionNotSetException = homeRegionNotSetException;
        return this;
    }
    public Object invalidParameterException;
    public StartDataCollectionByAgentIdsResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object invalidParameterValueException;
    public StartDataCollectionByAgentIdsResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Object serverInternalErrorException;
    public StartDataCollectionByAgentIdsResponse withServerInternalErrorException(Object serverInternalErrorException) {
        this.serverInternalErrorException = serverInternalErrorException;
        return this;
    }
    public openapisdk.models.shared.StartDataCollectionByAgentIdsResponse startDataCollectionByAgentIdsResponse;
    public StartDataCollectionByAgentIdsResponse withStartDataCollectionByAgentIdsResponse(openapisdk.models.shared.StartDataCollectionByAgentIdsResponse startDataCollectionByAgentIdsResponse) {
        this.startDataCollectionByAgentIdsResponse = startDataCollectionByAgentIdsResponse;
        return this;
    }
    public Long statusCode;
    public StartDataCollectionByAgentIdsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}