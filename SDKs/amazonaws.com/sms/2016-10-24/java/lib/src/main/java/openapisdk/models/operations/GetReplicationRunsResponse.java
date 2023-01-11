package openapisdk.models.operations;



public class GetReplicationRunsResponse {
    public String contentType;
    public GetReplicationRunsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetReplicationRunsResponse getReplicationRunsResponse;
    public GetReplicationRunsResponse withGetReplicationRunsResponse(openapisdk.models.shared.GetReplicationRunsResponse getReplicationRunsResponse) {
        this.getReplicationRunsResponse = getReplicationRunsResponse;
        return this;
    }
    public Object invalidParameterException;
    public GetReplicationRunsResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object missingRequiredParameterException;
    public GetReplicationRunsResponse withMissingRequiredParameterException(Object missingRequiredParameterException) {
        this.missingRequiredParameterException = missingRequiredParameterException;
        return this;
    }
    public Long statusCode;
    public GetReplicationRunsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthorizedOperationException;
    public GetReplicationRunsResponse withUnauthorizedOperationException(Object unauthorizedOperationException) {
        this.unauthorizedOperationException = unauthorizedOperationException;
        return this;
    }
}