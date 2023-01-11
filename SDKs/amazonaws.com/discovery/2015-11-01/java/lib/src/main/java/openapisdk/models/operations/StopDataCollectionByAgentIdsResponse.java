package openapisdk.models.operations;



public class StopDataCollectionByAgentIdsResponse {
    public Object authorizationErrorException;
    public StopDataCollectionByAgentIdsResponse withAuthorizationErrorException(Object authorizationErrorException) {
        this.authorizationErrorException = authorizationErrorException;
        return this;
    }
    public String contentType;
    public StopDataCollectionByAgentIdsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object homeRegionNotSetException;
    public StopDataCollectionByAgentIdsResponse withHomeRegionNotSetException(Object homeRegionNotSetException) {
        this.homeRegionNotSetException = homeRegionNotSetException;
        return this;
    }
    public Object invalidParameterException;
    public StopDataCollectionByAgentIdsResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object invalidParameterValueException;
    public StopDataCollectionByAgentIdsResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Object serverInternalErrorException;
    public StopDataCollectionByAgentIdsResponse withServerInternalErrorException(Object serverInternalErrorException) {
        this.serverInternalErrorException = serverInternalErrorException;
        return this;
    }
    public Long statusCode;
    public StopDataCollectionByAgentIdsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.StopDataCollectionByAgentIdsResponse stopDataCollectionByAgentIdsResponse;
    public StopDataCollectionByAgentIdsResponse withStopDataCollectionByAgentIdsResponse(openapisdk.models.shared.StopDataCollectionByAgentIdsResponse stopDataCollectionByAgentIdsResponse) {
        this.stopDataCollectionByAgentIdsResponse = stopDataCollectionByAgentIdsResponse;
        return this;
    }
}